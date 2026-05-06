import { customerSchema } from "./types/customer-types"

const customerData = require("./data/customers.json")

export const customerMockData = customerSchema.array().parse(customerData)