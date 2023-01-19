const path = require('path');

const rootDir = require('../util/path');

exports.getHome = (req,res,next)=>{
    console.log('home');
    res.sendFile(path.join(rootDir,'views','index.html'));
}

const User = require('../model/user');

exports.addData = async(req,res,next)=>{
    try{
        const email = req.body.email;
        const name= req.body.name;
        const phonenumber = req.body.phonenumber;
        const data = await User.create({
            name:name,
            email:email,
            phonenumber:phonenumber,
        });

        res.status(201).json({newUser:data});
    }
    catch(err){
         console.log(err);
         res.status(500).json({error:err});
    }
}

exports.getData = async(req,res,next)=>{
    try{
     const List = await User.findAll();
     res.status(200).json({userlist:List});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({error:err});
    }
}

exports.deleteData = async (req, res, next) => {
    try {
      if (!req.params.id) {
        console.log("ID IS MISSING");
        return res.status(400).json({ err: "ID is missing" });
      }
      const uId = req.params.id;
      // destroy method for deleting data.
      await User.destroy({ where: { id: uId } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };