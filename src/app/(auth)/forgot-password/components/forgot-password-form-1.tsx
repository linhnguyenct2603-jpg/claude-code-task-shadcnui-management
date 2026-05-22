"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { resetPassword, getFirebaseAuthErrorMessage } from "@/lib/firebase/auth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const forgotPasswordSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export function ForgotPasswordForm1({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [success, setSuccess] = useState(false)

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: ForgotPasswordValues) {
    try {
      form.clearErrors()
      await resetPassword(values.email)
      setSuccess(true)
    } catch (error) {
      form.setError("email", {
        message: getFirebaseAuthErrorMessage(error),
      })
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Quên mật khẩu?</CardTitle>
          <CardDescription>
            Nhập email của bạn và chúng tôi sẽ gửi liên kết đặt lại mật khẩu
          </CardDescription>
        </CardHeader>
        <CardContent>
          {success ? (
            <div className="space-y-4">
              <div className="rounded-md bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-300">
                Đã gửi email đặt lại mật khẩu đến <strong>{form.getValues("email")}</strong>.
                Vui lòng kiểm tra hộp thư và làm theo hướng dẫn.
              </div>
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                onClick={() => window.location.href = "/sign-in"}
              >
                Quay lại đăng nhập
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Đang gửi..." : "Gửi liên kết đặt lại"}
                </Button>
                <div className="text-center text-sm">
                  Nhớ mật khẩu?{" "}
                  <a href="/sign-in" className="underline underline-offset-4">
                    Quay lại đăng nhập
                  </a>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
