import express from "express";
import router from "../routes";
import cors from "cors";
import responseHandler from "../middleware/response-handler";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(cors());

//Use the response handler middleware
app.use(responseHandler);

// ROUTES
app.use("/api/v1", router);

export default app;
