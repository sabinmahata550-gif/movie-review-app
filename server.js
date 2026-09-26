import connectDb from "./src/config/db.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 5000;

connectDb();

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

export default app;