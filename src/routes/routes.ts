import { Router } from "express";
const routerBeach = Router();

import { allOrders, changeOrder, chooseOrder, deleteOrder, finalizeTheOrder } from "../controllers/food-controller.js";

routerBeach.get('/health', (req, res) => {
    res.send("ok");
})

routerBeach.post('/order', chooseOrder);
routerBeach.get('/finalize', finalizeTheOrder);
routerBeach.put('/change', changeOrder);
routerBeach.delete('/delete', deleteOrder);
routerBeach.get('/all', allOrders);

export default routerBeach;