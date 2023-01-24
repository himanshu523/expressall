
const path = require("path");
const rootDir = require("../util/path");


exports.getHome = (req, res, next) => {
  console.log(" HOME");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};


const Expenses = require("../models/homemodels");

exports.addData = async (req, res, next) => {
  try {
    const expenses = req.body.expenses;
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expenses.create({
      expenses: expenses,
      description: description,
      category: category,
    });
    res.status(201).json({ newExpenses: data }); 
  } catch (err) {
    console.log("ERROR");
    };

  };


exports.getData = async (req, res, next) => {
  try {
    const data = await Expenses.findAll();
    res.status(200).json({ newExpenses: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
  
};


exports.deleteData = async (req, res, next) => {
  try {
    const uId = req.params.id;
    
    await Expenses.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};