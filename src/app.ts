import express from "express";
import routerBeach from "./routes/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerBeach);


const port = 4000;
app.listen(port, () => console.log(`Serve running in port: ${port}`))