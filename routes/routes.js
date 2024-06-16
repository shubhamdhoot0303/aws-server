import express from "express";
import { addUser,getUser,getUsers,editUser,deleteUser,welcome } from "../controller/user-controller.js";
const router = express.Router();

router.get('/',welcome);
router.post('/add' , addUser );
router.get('/all',getUser);
router.get('/:id',getUsers);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);


export default router ;