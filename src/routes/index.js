import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = (app) => {
    userRoutes(app);
    authRoutes(app);
};

export default routes;