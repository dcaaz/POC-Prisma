import { Decimal } from "@prisma/client/runtime"

export type Order = {
    item: string,
    name: string,
    phonetype: number,
    value: number,
    referencePoint: string
}

export type Change = Pick<Order, "item" | "value">

export type Phone = Pick<Order, "phonetype">