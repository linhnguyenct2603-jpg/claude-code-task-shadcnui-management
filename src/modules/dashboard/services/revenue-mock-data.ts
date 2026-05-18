import revenueData from "./data/revenue-data.json"
import { revenueSchema } from "./types/revenue-types"
import type { Revenue } from "./types/revenue-types"

export const revenueMockData = revenueSchema.array().parse(revenueData) as Revenue[]
