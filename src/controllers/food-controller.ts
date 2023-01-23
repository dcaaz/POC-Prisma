import { Request, Response } from "express";
import { Change, Order } from "../protocols/order.js";
import { changeOrderSchema, OrderSchema } from "../schemas/order-schema.js";
import { connectionDB } from "../database/db.js";

async function chooseOrder(req: Request, res: Response) {
    const newOrder = req.body as Order;

    const { error } = OrderSchema.validate(newOrder);

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    try {

        await connectionDB.query('INSERT INTO "order" (item, name, phoneType, value, referencePoint) VALUES ($1, $2, $3, $4, $5);', [newOrder.item, newOrder.name, newOrder.phoneType, newOrder.value, newOrder.referencePoint]);

        return res.status(201).send("Pedido realizado, o pagamento é feito na entrega :)");

    }
    catch (err) {
        return res.status(500).send('Server not running');
    }
}

async function finalizeTheOrder(req: Request, res: Response) {
    const { id } = req.query

    try {

        const { rows } = await connectionDB.query('SELECT value FROM "order" WHERE id=$1;', [id]);

        const value = rows[0].value

        const deliveryFee: number = 5;

        const total = Number(value) + deliveryFee;

        res.status(200).send(`O valor total do pedido foi ${total} reais`);

    } catch (err) {
        return res.status(500).send('Server not running');
    }
}

async function allOrders(req: Request, res: Response) {
    const { phone } = req.query

    try {

        const data = await connectionDB.query('SELECT * FROM "order" WHERE phoneType=$1;', [phone]);


        res.status(200).send(`Sua retrospectiva é de: ${data.rowCount} pedidos! Oba! Peça novamente`);

    } catch (err) {
        return res.status(500).send('Server not running');
    }
}

async function changeOrder(req: Request, res: Response) {
    const { id } = req.query
    const newOrder = req.body as Change;

    const { error } = changeOrderSchema.validate(newOrder);

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    try {

        const { rows } = await connectionDB.query('SELECT name FROM "order" WHERE id=$1;', [id]);

        const name = rows[0].name

        await connectionDB.query('UPDATE "order" SET item=$1, value=$2 WHERE id=$3',
            [newOrder.item, newOrder.value, id]);

        res.status(201).send(`O pedido feito por ${name} foi alterado`);

    } catch (err) {
        return res.status(500).send('Server not running');
    }
}

async function deleteOrder(req: Request, res: Response) {
    const { id } = req.query // query reorna string

    try {

        const { rows } = await connectionDB.query('SELECT name FROM "order" WHERE id=$1;', [id]);

        const name = rows[0].name

        await connectionDB.query('DELETE FROM "order" WHERE id=$1;', [id]);

        res.status(200).send(`O pedido feito por ${name} foi cancelado`);

    } catch (err) {
        return res.status(500).send('Server not running');
    }
}


export {
    chooseOrder,
    finalizeTheOrder,
    allOrders,
    changeOrder,
    deleteOrder
}