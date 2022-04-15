import express from "express";
import creators from "../../../data/quiz3.json";

const router = express.Router();

let quiz3Creators = creators;

router.route("/getQuiz3Creators").get((req, res) => {
  res.status(200).send(quiz3Creators);
});

router.route("/addNewQuiz3Creators").post((req, res) => {
  const { body } = req;
  const { newCreator } = body || {};
  quiz3Creators.push(newCreator);

  res.status(200).send("ok");
});

// This is an example of how to handle a POST request
router.route("/postExample").post((req, res) => {
  const { body } = req;
  const { params } = body || {};
  res.status(200).send("ok");
});

export default router;
