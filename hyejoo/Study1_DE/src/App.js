import React from 'react';
import './App.css';
import BoardList from './components/BoardList';

const App = () => {
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

  return  (
    <div style={{ width: "300px"}}>
      {/* <BoardListItemGroupItem boardName="게시판 이름" boardNo="test" /> */}
      <BoardList groupList={groupList}></BoardList>
    </div>
  );
  


};



export default App;
