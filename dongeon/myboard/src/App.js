import React from "react";
import "./App.css";
import LeftSideMenu from "./components/LeftSideMenu";
import ArticleList from "./components/ArticleList";
const App = () => {
  const articleList = [
    {
      title: "안녕",
      vote: 10,
      boardName: "자유",
      boardNo: "1",
      articleNo: "1",
      comments: 10,
      time: "30 분 전",
      nickname: "동언",
      thumbnail: "",
      icon: "https://talk.op.gg/images/tier/icon-level-admin.png",
      fixed: true
    },
    {
      title: "안녕2",
      vote: 20,
      boardName: "자유",
      boardNo: "1",
      articleNo: "1",
      comments: 12,
      time: "35 분 전",
      nickname: "동언2",
      icon: "https://talk.op.gg/images/tier/icon-level-admin.png",
      thumbnail:
        "https://opgg-com-image.akamaized.net/attach/images/20200103065555.932603.jpg?image=w_200"
    },
    {
      title: "안녕3",
      vote: 200,
      boardName: "자유",
      boardNo: "1",
      articleNo: "1",
      comments: 12,
      time: "35 분 전",
      nickname: "동언2",
      icon: "https://talk.op.gg/images/tier/icon-level-admin.png",
      thumbnail:
        "https://opgg-com-image.akamaized.net/attach/images/20200103065555.932603.jpg?image=w_200"
    }
  ];

  return (
    // <div style={{ width: "300px" }}>
    //   {/* <BoardListGroupItem boardName="게시판 이름" boardNo="test" /> */}

    //   {/* <BoardListGroup
    //     groupName={groupList[1].groupName}
    //     boardList={groupList[1].boardList}
    //   /> */}

    //   <BoardList groupList={groupList} />
    // </div>

    <div style={{ width: "800px" }}>
      {/* <LeftSideMenu /> */}
      <ArticleList articleList={articleList} />
    </div>
  );
};

export default App;
