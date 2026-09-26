import connectDb from "./src/config/db.js";
import app from "./src/app.js";
import config from "./src/config/config.js";

connectDb();

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});