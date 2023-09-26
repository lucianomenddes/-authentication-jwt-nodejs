import { createNewUser, getUser, getId, update, remove } from "../controller/userController.js";
import verifyToken from "../middleware/verifyToken.js";

const userRoutes = (app) => {
    app.post('/signup', createNewUser);

    app.get('/users', verifyToken, getUser);
    app.get('/user/:id',getId);
    app.put('/user/:id',update);
    app.delete('/user/:id',remove);
    
};

export default userRoutes;