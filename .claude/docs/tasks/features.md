# Task Features — File Attachments

## Overview

Tasks now support file attachments via Firebase Storage. Each task can have multiple files uploaded and managed directly from the table row actions.

---

## Firestore Schema

### Tasks Collection

Same as before. No changes to the root `tasks` collection.

### Attachments Subcollection

Each task document has a subcollection `tasks/{taskId}/attachments`:

| Field        | Type     | Description                                      |
|--------------|----------|--------------------------------------------------|
| `id`         | string   | Auto-generated Firestore document ID             |
| `fileName`   | string   | Original file name                               |
| `fileUrl`    | string   | Firebase Storage download URL                    |
| `fileSize`   | number   | File size in bytes                               |
| `fileType`   | string   | MIME type (e.g. `application/pdf`, `image/png`)  |
| `uploadedAt` | string   | ISO 8601 timestamp                               |
| `uploadedBy` | string   | User identifier (defaults to `"current-user"`)   |

---

## Firebase Storage

### Path Structure

Files are stored at:

```
tasks/{taskId}/attachments/{sanitizedFileName}
```

### File Validation

- **Max size**: 50MB per file
- **Blocked extensions**: `exe`, `sh`, `bat`, `cmd` (security restriction)
- **Allowed types**: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, JPG, JPEG, PNG, GIF, WEBP

### Storage Rules

Requires Firebase Storage rules to restrict access to authenticated users. Add rules in Firebase Console > Storage > Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /tasks/{taskId}/attachments/{allPaths} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## Files

### Created

| File | Description |
|------|-------------|
| `src/modules/tasks/services/attachment-services.ts` | Storage + Firestore CRUD for attachments |
| `src/modules/tasks/components/task-attachments-dialog.tsx` | Upload dialog with drag-drop, progress, file list |

### Modified

| File | Changes |
|------|---------|
| `src/modules/tasks/services/types/task-types.ts` | Added `attachmentSchema` + `Attachment` type |
| `src/modules/tasks/components/columns.tsx` | Added `onAttachments` prop to `BuildColumnsProps` |
| `src/modules/tasks/components/data-table-row-actions.tsx` | Added **Attachments** menu item in row dropdown |
| `src/app/(dashboard)/tasks/page.tsx` | Added `attachmentsDialog` state + `TaskAttachmentsDialog` at page level |

---

## UI Flow

1. User clicks **⋮ (More)** menu on any table row
2. Selects **Attachments** → opens standalone `TaskAttachmentsDialog` (separate from Edit dialog)
3. Drag-and-drop files or click to browse
4. Each file shows real-time upload progress bar
5. On completion, file appears in the list below with download/delete actions
6. Files are persisted in Firestore subcollection + Firebase Storage

## Error Handling

- File validation errors shown inline per file (extension block, size limit, unsupported type)
- Upload failures show a red banner with the error message
- Load failures show a red banner at the top of the list
- Storage delete failures are silently ignored (object-not-found)

---

## Dependencies

- `firebase/storage` — `uploadBytesResumable`, `getDownloadURL`, `deleteObject`
- `firebase/firestore` — `collection`, `addDoc`, `getDocs`, `deleteDoc`, `doc`, `setDoc`
- `Progress` component from shadcn/ui
