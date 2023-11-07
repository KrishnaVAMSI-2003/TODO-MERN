import express from "express";
import { PORT } from "./utils/constants"
import { HomeController } from "./controllers/HomeController";
import mongoose from "mongoose";
import { MONGO_URI } from "./utils/constants";
import { AuthRoute } from "./routes/authRoute";
import { ProtectedRoute } from "./routes/userRoutes";
import { AuthMiddleware } from "./middlewares/authMiddleware";

const app = express();

app.use(express.json());
app.use('/auth', AuthRoute);
app.use('/user', AuthMiddleware, ProtectedRoute);


app.get("/", HomeController);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));