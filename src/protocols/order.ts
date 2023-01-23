export type Order = {
    item: string,
    name: string,
    phoneType: number,
    value: number,
    referencePoint: string
}

export type Change = Pick<Order, "item" | "value">