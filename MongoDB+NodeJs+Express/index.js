import express from 'express';
import dotenv from 'dotenv';

import routes from './src/routes/routes.js';
import connectDB from './src/connection.js';
import { checkAge } from './src/middelware/auth.js';

const app = express();
const PORT = process.env.PORT || 3005;
app.use(checkAge);

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:3005');
});