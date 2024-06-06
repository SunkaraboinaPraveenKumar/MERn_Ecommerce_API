import express from 'express';
import { login, profile, register, users } from '../Controllers/user.js';
import {Authenticated}  from '../Middlewares/auth.js'

const userRouter = express.Router();

// Register user
userRouter.post('/register', register);//=>api/user/register

//login user
userRouter.post('/login',login)

//get all users
userRouter.get('/all',users)

//get user profile
userRouter.get('/profile',Authenticated,profile)


export default userRouter;
