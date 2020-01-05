import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardList from "./components/BoardList";
import queryString from "query-string";
const App = () => {
  const queries = queryString.parse(document.location.search);

  const groupList = [
    {
      groupName: "홈",
      boardList: [
        {
          boardName: "전체",
          boardNo: "home"
        }
      ]
    },
    {
      groupName: "정보",
      boardList: [
        {
          boardName: "OP.GG 기획",
          boardNo: "1"
        },
        {
          boardName: "유저 뉴스",
          boardNo: "2"
        },
        {
          boardName: "팁과 노하우",
          boardNo: "3"
        }
      ]
    },
    {
      groupName: "커뮤니티",
      boardList: [
        {
          boardName: "자유",
          boardNo: "4"
        },
        {
          boardName: "유머",
          boardNo: "5"
        },
        {
          boardName: "영상",
          boardNo: "6"
        },
        {
          boardName: "유저 찾기",
          boardNo: "7"
        },
        {
          boardName: "사건 사고",
          boardNo: "8"
        },
        {
          boardName: "팬 아트",
          boardNo: "9"
        }
      ]
    }
  ];

  const leftSideMenuStyle = {
    width: "300px",
    margin: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.15)"
  };

  const userInfoStyle = {
    padding: "10px"
  };
  const userInfoButtonStyle = {
    width: "100%",
    height: "40px",
    backgroundColor: "#46cfa7",
    color: "white",
    borderRadius: "5px",
    outline: "none",
    fontSize: "14px"
  };

  return (
    <div className="left-side-menu" style={leftSideMenuStyle}>
      <div className="user-info" style={userInfoStyle}>
        <button style={userInfoButtonStyle}>로그인</button>
      </div>
      <BoardList groupList={groupList} selectedNo={queries.boardNo}></BoardList>
    </div>
  );
};

export default App;
