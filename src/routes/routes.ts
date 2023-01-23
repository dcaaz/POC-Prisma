import {Router} from "express";
const routerBeach = Router();

import { changeOrder, chooseOrder, deleteOrder, finalizeTheOrder } from "../controllers/food-controller.js";

routerBeach.get('/health', (req, res) => {
    res.send("ok");
})

routerBeach.post('/order', chooseOrder);
routerBeach.get('/finalize', finalizeTheOrder);
routerBeach.put('/change', changeOrder);
routerBeach.delete('/delete', deleteOrder);

export default routerBeach;