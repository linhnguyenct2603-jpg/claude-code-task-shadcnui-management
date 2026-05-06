import {
  MessageSquare,
  Phone,
  AlertTriangle,
  RefreshCw,
  HeadphonesIcon,
  CheckCircle,
  Clock,
  XCircle,
  Circle,
} from "lucide-react"

import { customerCareSchema } from "./types/customer-care-types"

const customerCareData = require("./data/customer-care.json")

export const customerCareMockData =
  customerCareSchema.array().parse(customerCareData)

export const careTypes = [
  { value: "consultation", label: "Tư vấn", icon: MessageSquare },
  { value: "callback", label: "Gọi lại", icon: Phone },
  { value: "complaint", label: "Khiếu nại", icon: AlertTriangle },
  { value: "follow_up", label: "Theo dõi", icon: RefreshCw },
  { value: "support", label: "Hỗ trợ", icon: HeadphonesIcon },
]

export const careStatuses = [
  { value: "new", label: "Mới", icon: Circle },
  { value: "in_progress", label: "Đang xử lý", icon: Clock },
  { value: "resolved", label: "Đã giải quyết", icon: CheckCircle },
  { value: "closed", label: "Đóng", icon: XCircle },
]

export const carePriorities = [
  { value: "low", label: "Thấp" },
  { value: "normal", label: "Bình thường" },
  { value: "high", label: "Cao" },
  { value: "urgent", label: "Khẩn cấp" },
]

export const assignedStaff = [
  "Trần Thu Hà",
  "Phạm Đức Anh",
  "Nguyễn Thanh Sơn",
]
