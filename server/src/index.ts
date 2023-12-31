import express from "express";
import { PORT } from "./utils/constants"
import { HomeController } from "./controllers/HomeController";
import mongoose from "mongoose";
import { MONGO_URI } from "./utils/constants";
import { AuthRoute } from "./routes/authRoute";
import { ProtectedRoute } from "./routes/userRoutes";
import { AuthMiddleware } from "./middlewares/authMiddleware";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', AuthRoute);
app.use('/user', AuthMiddleware, ProtectedRoute);


app.get("/", HomeController);



mongoose.connect(MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch((err) => console.log(err));