const express=require('express')
const controllers = require('../models/todoModels')
const router=express.Router()


router.get('/',controllers.getAllTodos)
router.post('/create',controllers.create)

module.exports=router