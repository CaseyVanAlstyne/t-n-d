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


router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json("failed to delete todo"))
})

// router.delete("/:_id", async (req, res) => {
//   try {
//     await User.findByIdAndRemove(req.params.id)
//     return res.status(200).send("todo deleted!")
//   } catch (err) {
//     res.status(400).json("failed to delete todo");
//   }
// })


// router.delete('/:id', (req, res, next) => {
//   User.findOneAndDelete({"_id": req.params.id})
//     .then(data => res.json(data))
//     .catch(next)
// })

// router.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     User.findByIdAndRemove(id, err => {
//     if (err) return res.send(500, err);
//     res.send(id)
//     });
//     });



module.exports = router;
