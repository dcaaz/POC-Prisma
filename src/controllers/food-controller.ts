import { Request, Response } from "express";
import { Order } from "../protocols/order.js";
import { changeOrderSchema, OrderSchema } from "../schemas/order-schema.js";
import { finalizeUnique, insertUnique, manyOrders, upNewOrder, deleteId, findCoupon } from "../repositories/food-repositorie.js";

async function chooseOrder(req: Request, res: Response) {
    const newOrder = req.body as Order;

    const { error } = OrderSchema.validate(newOrder);

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }


    try {
        await insertUnique(newOrder);
        return res.status(201).send("Pedido realizado, o pagamento é feito na entrega :)");
    }
    catch (err) {
        console.log("err", err)
        return res.status(500).send('Server not running');
    }
}

async function finalizeTheOrder(req: Request, res: Response) {
    const { id } = req.query;

    const idFinalize = Number(id);

    try {
        const resultado = await finalizeUnique(idFinalize);


        const value = resultado.value;

        const idCoupon = resultado.coupon;

        if(idCoupon === null){
            const deliveryFee: number = 5;

            const total = Number(value) + deliveryFee ;
    
            res.status(200).send(`O valor total do pedido é ${total} reais`);
        } else {
            const data = await findCoupon(idCoupon);

            const coupon = Number(data.value);

            const deliveryFee: number = 5;

            const total = (Number(value) + deliveryFee) - coupon ;

            res.status(200).send(`O valor total do pedido é ${total} reais`);
        }

    } catch (err) {
        console.log("err", err)
        return res.status(500).send('Server not running');
    }
}

async function allOrders(req: Request, res: Response) {
    const { phone } = req.query;
    const phonetype = Number(phone);

    try {

        const data = await manyOrders(phonetype);

        res.status(200).send(`Sua retrospectiva é de: ${data.length} pedidos! Oba!`);

    } catch (err) {
        console.log("err", err);
        return res.status(500).send('Server not running');
    }
}

async function changeOrder(req: Request, res: Response) {
    const { id } = req.query;
    const idNumber = Number(id);
    const newOrder = req.body;

    const { error } = changeOrderSchema.validate(newOrder);

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    try {

        const data = await upNewOrder(idNumber, newOrder);

        res.status(201).send(`O pedido feito por ${data.name} foi alterado`);

    } catch (err) {
        return res.status(500).send('Server not running');
    }
}

async function deleteOrder(req: Request, res: Response) {
    const { id } = req.query;
    const idNumber = Number(id);

    try {

        // const { rows } = await connectionDB.query('SELECT name FROM "order" WHERE id=$1;', [id]);

        // const name = rows[0].name

        // await connectionDB.query('DELETE FROM "order" WHERE id=$1;', [id]);

        const data = await deleteId(idNumber);

        res.status(200).send(`O pedido feito por ${data.name} foi cancelado`);

    } catch (err) {
        return res.status(500).send('Server not running');
    }
}


export {
    finalizeTheOrder,
    chooseOrder,
    allOrders,
    changeOrder,
    deleteOrder
}