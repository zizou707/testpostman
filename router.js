const express = require("express");
const router = express.Router();
const Contact = require('./ContactSchema')

router.get('/test',(req,res)=>{
    res.send('tested')
})

//add contact
router.post('/addContact',(req,res)=>{
    const {name,email,phone}=req.body;
    const newContact = new Contact({name,email,phone})
    newContact.save();
    res.send(newContact)
})

module.exports=router