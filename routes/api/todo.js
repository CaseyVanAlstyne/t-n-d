const express = require("express");
const router = express.Router();

// const Todo = require("../../models/Todo");
const User = require("../../models/User");

router.post("/addquest/:id/", (req, res) => {
  console.log("hey there world", req.body);
  let todo = {
    name: req.params.name,
    experience: 20,
  };
  User.findByIdAndUpdate(req.params.id, {
    $push: { quests: req.body.quest },
  }).then(() =>
    res.json({
      ok: true,
    })
  );
});

router.get("/", (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.status(422).json(err);
        } else {
            res.json(result);
        }
    })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
    });
    });

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     Todo.findById(id, (err, todo) => {
//         res.json(todo);
//     });
// });



module.exports = router;
