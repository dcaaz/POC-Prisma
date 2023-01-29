export type Order = {
    item: string,
    name: string,
    phonetype: number,
    value: number,
    referencepoint: string,
    category: number,
    coupon: number
}

export type Change = Pick<Order, "item" | "value">