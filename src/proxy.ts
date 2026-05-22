import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { adminAuth, adminDb } from '@/lib/firebase/admin'

// Map URL paths to their required permission
const ROUTE_PERMISSION_MAP: Record<string, string> = {
  '/dashboard': 'dashboard',
  '/dashboard-2': 'dashboard_2',
  '/dashboard-3': 'dashboard_3',
  '/chart': 'chart',
  '/mail': 'mail',
  '/tasks': 'tasks',
  '/chat': 'chat',
  '/calendar': 'calendar',
  '/users': 'users',
  '/iso-documents': 'iso_documents',
  '/quiz': 'quiz',
  '/quiz-monitor': 'quiz_monitor',
  '/settings': 'settings',
  '/faqs': 'faqs',
  '/pricing': 'pricing',
  '/mock-data': 'mock_data',
  '/projects': 'projects',
  '/customer-care': 'customer_care',
  '/customers': 'users',
  '/landing': 'landing',
  '/errors': 'errors',
}

// Routes that don't require auth
const PUBLIC_ROUTES = [
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/landing',
  '/seed-rbac',
]

function getRequiredPermission(pathname: string): string | null {
  // Exact match
  if (ROUTE_PERMISSION_MAP[pathname]) {
    return ROUTE_PERMISSION_MAP[pathname]
  }

  // Wildcard matches for sub-routes (e.g., /settings/account → settings)
  for (const route of Object.keys(ROUTE_PERMISSION_MAP)) {
    if (pathname.startsWith(route + '/')) {
      return ROUTE_PERMISSION_MAP[route]
    }
  }

  // Default: require authentication but no specific permission
  return 'dashboard'
}

async function verifySession(sessionCookie: string) {
  try {
    return await adminAuth().verifySessionCookie(sessionCookie, true)
  } catch {
    return null
  }
}

async function getUserRole(uid: string): Promise<string[]> {
  try {
    const userRolesSnap = await adminDb()
      .collection('user_roles')
      .where('uid', '==', uid)
      .limit(1)
      .get()

    if (userRolesSnap.empty) return []

    const roleSlug: string = userRolesSnap.docs[0].data().roleSlug

    const rolesSnap = await adminDb()
      .collection('roles')
      .where('slug', '==', roleSlug)
      .limit(1)
      .get()

    if (rolesSnap.empty) return []
    return rolesSnap.docs[0].data().permissions ?? []
  } catch {
    return []
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Keep simple path redirects from the previous proxy
  if (pathname === '/login') {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (pathname === '/register') {
    return NextResponse.redirect(new URL('/sign-up', request.url))
  }

  // Allow public routes without auth
  if (PUBLIC_ROUTES.some((r) => pathname.startsWith(r))) {
    return NextResponse.next()
  }

  // Allow static files, api routes, _next
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next()
  }

  const sessionCookie = request.cookies.get('session')?.value

  if (!sessionCookie) {
    const loginUrl = new URL('/sign-in', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  const decodedToken = await verifySession(sessionCookie)

  if (!decodedToken) {
    const loginUrl = new URL('/sign-in', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  const uid = decodedToken.uid
  const requiredPermission = getRequiredPermission(pathname)

  // Administrator always has access to everything
  const permissions = await getUserRole(uid)
  if (requiredPermission !== null && !permissions.includes(requiredPermission)) {
    // If authenticated but no matching role, redirect to sign-in
    const loginUrl = new URL('/sign-in', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
