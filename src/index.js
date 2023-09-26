import  express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.use(express.json())
routes(app);



const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
)
