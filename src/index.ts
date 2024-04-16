import app from "./config/server";
import * as dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`listening from port ${process.env.PORT}`)
);
