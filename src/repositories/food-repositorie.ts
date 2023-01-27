import prisma from "../database/db.js";
import { Change, Order, Phone } from "../protocols/order.js";

async function finalizeUnique(id: number) {
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

async function manyOrders(phonetype: number) {
    return prisma.order.findMany({
        where: {
            phonetype: phonetype
        }
     })
}

async function upNewOrder(idNumber: number, newOrder: Change) {
    return prisma.order.update({
        where: {
            id: idNumber,
        },
        data: {
            item: newOrder.item,
            value: newOrder.value
        }
    })
}


export {
    finalizeUnique,
    insertUnique,
    manyOrders,
    upNewOrder
}