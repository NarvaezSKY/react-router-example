import { Router } from "express";
import { getAllUsers, uploadUsers } from "../controllers/user.controller.js";

const router=Router()

router.get('/getusers',getAllUsers)
router.post('/register',uploadUsers)


export default router