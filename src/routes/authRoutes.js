import { authenticate } from "../controller/authController.js";

const authRoutes = (app) => {
    app.post("/login", authenticate);
};

export default authRoutes;