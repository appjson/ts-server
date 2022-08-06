import express from "express";
import cron from "node-cron";
import { getData, sendNotifi } from "./helper";
import axios from "axios";

const app = express();
const port = 3333;

cron.schedule("0 9 * * *", () => {
  console.log("Start send message...");
  axios.get("http://127.0.0.1:3333/send").then();
});

app.get("/", (req, res) => {
  getData().then(({ data }) => {
    res.json(data);
  });
});

app.get("/send", (req, res) => {
  let key = req?.query["key"] as string;
  if (!key) key = "";
  getData().then((resp) => {
    sendNotifi(resp.data, key).then(({ data }) => {
      res.json(data);
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
