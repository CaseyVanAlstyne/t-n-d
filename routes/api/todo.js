const express = require("express");
const router = express.Router();

const User = require("../../models/User");

// POST Route to push a new todo item to a selected user by ID
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

router.get("/getuser/:id", (req, res) => {
  User.findById( req.params.id,
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
)});


router.delete("/deletequest/:id/:questId",(req, res) => {
  User.findByIdAndUpdate(req.params.id, 
    {$pull: {quests:{id:req.params.questId}}}
)})


// router.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     Todo.findByIdAndRemove(id, err => {
//     if (err) return res.send(500, err);
//     res.redirect("/");
//     });
//     });

module.exports = router;
