import express from "express"
import { getFlower } from "../controller/flower.controller.js"

const router=express.Router()

router.get("/",getFlower)

export default router