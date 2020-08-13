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

router.get("/adduser/:id", (req, res) => {
  return
})

// router.post('/add', (req, res) => {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

// router.get('/', (req, res) => {
//     Todo.find((err, todo) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todo);
//         }
//     });
// });

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     Todo.findById(id, (err, todo) => {
//         res.json(todo);
//     });
// });

// router.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     Todo.findByIdAndRemove(id, err => {
//     if (err) return res.send(500, err);
//     res.redirect("/");
//     });
//     });

module.exports = router;
