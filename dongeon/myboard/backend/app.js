const express = require("express");
const app = express();

app.listen(8080);

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let { boardNo, page } = req.query;
  boardNo = boardNo || "notice";
  page = page || 1;

  const boardNames = {
    notice: "공지사항",
    "1": "자유",
    "2": "유머",
    "3": "영상"
  };
  const boardName = boardNames[boardNo];

  const nickNames = ["아이유", "이국종", "싸이", "이승기", "김국진"];
  const articles = new Array(10)
    .fill(undefined)
    .map((val, index) => {
      const nickname = nickNames[Math.ceil(Math.random() * 5)];
      return {
        title: `${page}페이지의 ${index + 1}번째 게시글`,
        vote:
          Math.ceil(Math.random() * 100) + Math.ceil(Math.random() * 5) * 100,
        boardName,
        boardNo: boardNo,
        articleNo: (page - 1) * 10 + index,
        comments: Math.ceil(Math.random() * 30),
        time: "35 분 전",
        nickname,
        icon: "https://talk.op.gg/images/tier/icon-level-admin.png",
        thumbnail:
          "https://opgg-com-image.akamaized.net/attach/images/20200103065555.932603.jpg?image=w_200"
      };
    })
    .map((val, index) => {
      if (index < 2) return { ...val, fixed: true };
      return val;
    });
  res.send(articles);
});
