import path from "path";
import express from "express";
import initialRenderRoutes from "./controller/initialRenderController";

const app = express();
app.use("^/$", initialRenderRoutes);
app.use(express.static(path.resolve(__dirname, "../build")));

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
