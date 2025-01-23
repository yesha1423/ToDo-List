const express = require("express");
const { getdata ,postdata,updatedata,deletedata } = require("../controller/usercontroller");
const userRouter = express.Router();

todoRouter.get("/getdata",getdata);

todoRouter.post("/postdata",postdata);

todoRouter.patch("/putdata/:id",updatedata);

todoRouter.delete("/deletedata/:id",deletedata);

module.exports = todoRouter;