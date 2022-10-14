const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Users = require("./modles/TestDataModel");

// const CONNECTION_URL = "mongodb://localhost:27017/TestData";
const CONNECTION_URL = "mongodb+srv://abc:123@cluster0.kcyrqot.mongodb.net/TestData?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

//middleware
app.use(cors());
app.use(express.json());
//routs
app.get("/", (req, res) => {
  Users.find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.post("/users", (req, res) => {
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  console.log(req.body.place);
  const UserData = new Users({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    date : req.body.date,
    place: req.body.place,
  });
  UserData.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "succesfully submitted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurd" });
    });
});
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  Users.remove({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("error occurd");
    } else {
      res.status(200).json({ msg: "successfully deleted" });
    }
  });
});

app.put("/users/:id", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;  
  const id = req.params.id;
  const email = req.body.email;
  const password = req.body.password;
  const place = req.body.place;
  Users.updateOne(
    { _id: id },
    {
      $set: {
        firstname: firstname,
        lastname: lastname,
        place: place,
        email: email,
        password: password,
      },
    }
  )

    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "succesfully submitted" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "error occurd" });
    });
});
