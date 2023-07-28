import express from "express";
import creators from "../../../data/quiz3.json";

const router = express.Router();

let quiz3Creators = creators;

const TAGS = [
  "mom",
  "baby",
  "child",
  "teenager",
  "adult",
  "senior",
  "model",
  "teacher",
  "actor",
  "actress",
  "singer",
  "musician",
  "painter",
];
const quiz4InfluencersBaseline = [];
for (let i = 0; i < 10000000; i++) {
  const randomTagIndex = Math.floor(Math.random() * TAGS.length);
  const influencer = {
    id: i,
    name: `name-${i}`,
    tag: TAGS[randomTagIndex],
  };
  quiz4InfluencersBaseline.push(influencer);
}

/* Use the data in `quiz4InfluencersBaseline` and create an optimized data structure for `quiz4Influencers` */
// My answer: 构造一个map,通过遍历每项数据，以数据项的tag作为map的key,其map的value维护一个数组，将tag相同的数据项放在一起。
// 这也查询的时候相当于只查map的key，就可以拿到对应的数组结果了
const quiz4Influencers = quiz4InfluencersBaseline.reduce(
  (result, currentItem) => {
    if (result[currentItem.tag]) {
      result[currentItem.tag].push(currentItem);
      return result;
    } else {
      result[currentItem.tag] = [currentItem];
      return result;
    }
  },
  {}
);

router.route("/getQuiz3Creators").get((req, res) => {
  res.status(200).send(quiz3Creators);
});

router.route("/addNewQuiz3Creators").post((req, res) => {
  const { body } = req;
  const { newCreator } = body || {};
  /* Quiz #3 - 3. Handle the POST request sent from the client */
  /* Your code goes here */
  // My answer: send back the newCreator data
  res.status(200).send([newCreator]);
});

router.route("/queryQuiz4CreatorsBaseline").get((req, res) => {
  const { query } = req;
  const { tag } = query || {};

  const start = new Date().getTime();

  const results = quiz4InfluencersBaseline.filter(
    (influencer) => influencer.tag === tag
  );

  const elapsed = new Date().getTime() - start;

  res.status(200).send({
    results,
    cost: `${elapsed}ms`,
  });
});

/* Quiz #4 - (Optional) Optimization */
/* Your code goes here */
// My answer: pre-process the data `quiz4Influencers` beforehand
router.route("/queryQuiz4Creators").get((req, res) => {
  const { query } = req;
  const { tag } = query || {};
  const start = new Date().getTime();

  /* Quiz #4 - Optimized the lookup */
  const results = quiz4Influencers?.[tag] ?? [];

  const elapsed = new Date().getTime() - start;
  res.status(200).send({
    results,
    cost: `${elapsed}ms`,
  });
});

// This is an example of how to handle a POST request
router.route("/postExample").post((req, res) => {
  const { body } = req;
  const { params } = body || {};
  res.status(200).send("ok");
});

export default router;
