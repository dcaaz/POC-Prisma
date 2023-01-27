import { Router } from "express";
const routerBeach = Router();

//import { allOrders, changeOrder, chooseOrder, deleteOrder, finalizeTheOrder } from "../controllers/food-controller.js";
import { finalizeTheOrder, chooseOrder, allOrders, changeOrder } from "../controllers/food-controller.js";

routerBeach.get('/health', (req, res) => {
    res.send("ok");
})

routerBeach.post('/order', chooseOrder);
routerBeach.get('/finalize', finalizeTheOrder);
routerBeach.get('/all', allOrders);
routerBeach.put('/change', changeOrder);
// routerBeach.delete('/delete', deleteOrder);

export default routerBeach;