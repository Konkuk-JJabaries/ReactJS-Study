import React, { Component } from "react";
import BoardList from "./BoardList";

class LeftSideMenu extends Component {
  render() {
    const groupList = [
      {
        groupName: "홈",
        boardList: [
          {
            boardName: "전체",
            boardNo: "notice"
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
            boardNo: "1"
          },
          {
            boardName: "유머",
            boardNo: "2"
          },
          {
            boardName: "영상",
            boardNo: "3"
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
    return (
      <div className="left-side-menu">
        <div className="user-info">
          <button>로그인</button>
        </div>
        <BoardList groupList={groupList}></BoardList>
      </div>
    );
  }
}

export default LeftSideMenu;
