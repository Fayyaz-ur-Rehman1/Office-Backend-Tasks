import express from 'express';
import routes from "./src/routings/routes.js"

const app = express();
const PORT = 3007;

app.use(express.urlencoded({ extended: true }));
app.use("/users", routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});