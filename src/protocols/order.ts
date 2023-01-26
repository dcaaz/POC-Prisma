import { Decimal } from "@prisma/client/runtime"

export type Order = {
    item: string,
    name: string,
    phoneType: string,
    value: string,
    referencePoint: string
}

export type Change = Pick<Order, "item" | "value">