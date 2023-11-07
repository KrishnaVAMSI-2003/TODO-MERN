import express from "express";
import { PORT } from "./utils/constants"
import { HomeController } from "./controllers/HomeController";
import { AuthRoute } from "./routes/authRoute";
import mongoose from "mongoose";
import { MONGO_URI } from "./utils/constants";

const app = express();

app.use(express.json());
app.use('/auth', AuthRoute);


app.get("/", HomeController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));