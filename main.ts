import express from "express";
import { getData, sendNotifi } from "./helper";

const app = express();
const port = 3333;

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
