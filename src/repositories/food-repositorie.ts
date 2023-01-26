import prisma from "../database/db.js";
import { Order } from "../protocols/order.js";

async function finalize(id: number) {
     return prisma.order.findUnique({
        where: {
            id
        }
     })
}



async function insertUnique(newOrder: Order) {
    return prisma.order.create({
        data: {
            item: newOrder.item,
            name: newOrder.name,
            phonetype: newOrder.phonetype,
            value: newOrder.value,
            referencepoint: newOrder.referencePoint
        }
    })
}


export {
    finalize,
    insertUnique
}