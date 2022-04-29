const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const {add,sub} = require("./node_modules/add/index")


console.log(add(2,2));
console.log(sub(2,2));

app.listen(port,(err) => {
  if(err) {
    console.log(`Error`);
  } else{
    console.log(`Listening on port ${port}`);
  }
})