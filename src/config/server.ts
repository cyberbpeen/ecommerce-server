import express from "express";
import router from "../routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(cors());

// ROUTES
app.use("/api/v1", router);

export default app;
