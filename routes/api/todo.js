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
