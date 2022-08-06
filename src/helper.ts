import axios from "axios";

interface DataStruct {
  Data: {
    Id: string;
    Name: string;
    GroupId: string;
    GroupName: string;
    TopicName: string;
    CategoryName: string;
    Message: string;
    Icon: string;
    ImgUrls: string[];
    Popularity: number;
    Ranking: number;
    [propName: string]: any;
  };
  Status: 1;
  Message: string;
  ServerTime: string;
}

export function sendNotifi(data: DataStruct, api_key: string) {
  const rank = data.Data.Ranking;
  const name = data.Data.Name;
  const popu = data.Data.Popularity;
  const stime = data.ServerTime;
  const url = encodeURI(
    `https://api2.pushdeer.com/message/push?pushkey=${api_key}&text=【${name}】当前排名：${rank} 当前热度：${popu} 查询时间：${stime}`
  );
  return axios.get(url);
}

export function getData() {
  const API_URL =
    "https://edgecontest.microsoft.com/api/api/WorkData/GetWorkDataById?workDataId=bd23ea31-ee7b-4fbc-be38-7508258d7bd1";
  return axios.get(API_URL);
}
