import { Router } from "express";
const routerBeach = Router();

import { finalizeTheOrder, chooseOrder, allOrders, changeOrder, deleteOrder } from "../controllers/food-controller.js";

routerBeach.get('/health', (req, res) => {
    res.send("ok");
})

routerBeach.post('/order', chooseOrder);
routerBeach.get('/finalize', finalizeTheOrder);
routerBeach.get('/all', allOrders);
routerBeach.put('/change', changeOrder);
routerBeach.delete('/delete', deleteOrder);

export default routerBeach;