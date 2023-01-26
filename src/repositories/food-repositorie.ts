import prisma from "../database/db.js";
import { Order } from "../protocols/order.js";

async function finalize(id: number) {
     return prisma.order.findUnique({
        where: {
            id
        }
     })
}



async function insertUnique(dataUser: Order) {
   /*  return prisma.order.create({
        data: dataUser
    }) */
}

export {
    finalize
}