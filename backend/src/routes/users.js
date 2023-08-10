import { userModel } from '../models/Users.js';
import express from 'express';


const router = express.Router();

router.post('/register', async (req,res)=>{
    const {name,emailId,address,mobileNumber,eventString} = req.body;
    const user = await userModel.findOne({emailId : emailId});

    try{
        if(user)
        {
            let flag = 1;
            user.event.map((event)=>{
                if(event === eventString)
                {
                    flag = 0;
                    return;
                }
            })
            if(flag === 1)
            {
                user.event.push(eventString);
                await user.save();
                return res.status(200).json({message : "User registered Successfully"});
            }
            else
            {
                return res.status(409).json({message : "User has already registered for this event"});
            }
            
        }
        else
        {
            const newUser = new userModel({name,emailId,address,mobileNumber,event : []});
            newUser.event.push(eventString);
            await newUser.save();
            res.status(200).json({message : "User Registered Successfully"});
        }
    }
    catch(err){
        res.status(500).json({error : "Internal server error"});
    }

});



export {router as UserRouter};
