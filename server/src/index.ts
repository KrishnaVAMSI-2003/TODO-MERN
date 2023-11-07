import express from "express";
import { PORT } from "./utils/constants"
import { HomeController } from "./controllers/HomeController";
import { AuthRoute } from "./routes/authRoute";

const app = express();

app.use(express.json());
app.use('/auth', AuthRoute);


app.get("/", HomeController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});