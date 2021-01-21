const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    console.log("All Workouts");
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }

    ])
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({ body })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

router.put("/api/workouts/:id", (req, res) => {

})

router.get("/api/workouts/range", (req, res) => {

})