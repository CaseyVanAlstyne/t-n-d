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

router.post("/adddaily/:id/", (req, res) => {
  console.log("hey there world", req.body);
  let daily = {
    name: req.params.name,
    experience: 20,
  };
  User.findByIdAndUpdate(req.params.id, {
    $push: { dailies: req.body.daily },
  }).then(() =>
    res.json({
      ok: true,
    })
  );
});

router.get("/getuser/:id", (req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.put("/deletequest/:id/:questId", (req, res) => {
  console.log(req.params.id, req.params.questId);
  User.findByIdAndUpdate(req.params.id, {
    $pull: { quests: { id: req.params.questId } },
  }).then(() => {
    res.json({ ok: true });
  });
});

router.put("/deletedaily/:id/:dailyId", (req, res) => {
  console.log(req.params.id, req.params.dailyId);
  User.findByIdAndUpdate(req.params.id, {
    $pull: { dailies: { id: req.params.dailyId } },
  }).then(() => {
    res.json({ ok: true });
  });
});


router.put("/updateEXP/:id/:exp", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: {experience: req.params.exp}
  }).then(() => {
    res.json({ ok: true });
  });
});

module.exports = router;
