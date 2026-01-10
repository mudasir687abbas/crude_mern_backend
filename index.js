import express from "express";
import cors from "cors";
import crudRoute from "./routes/crudRoute.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(
  cors({
    origin: "https://crude-mern-frontend.vercel.app", // your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json()); 
app.use("/api/users", crudRoute);
app.use(errorHandler);
export default app;

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
