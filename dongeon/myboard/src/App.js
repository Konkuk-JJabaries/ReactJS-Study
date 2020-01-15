import React, { Component } from "react";
import "./App.scss";
import ArticleList from "./components/ArticleList";
import Wrapper from "./components/Wrapper";
import MainContent from "./components/MainContent";
import SubHeader from "./components/SubHeader";
import LeftSideMenu from "./components/LeftSideMenu";
class App extends Component {
  state = {
    boardNo: "notice"
  };
  render() {
    setInterval(() => {
      const { boardNo } = this.state;
      const { hash } = document.location;

      if (boardNo !== hash.substr(1))
        this.setState({ boardNo: hash.substr(1) });
      console.log(boardNo);
    }, 300);

    return (
      <>
        <div className="background" />
        <Wrapper>
          <LeftSideMenu />
          <MainContent>
            <SubHeader />
            <ArticleList boardNo={this.state.boardNo} />
          </MainContent>
        </Wrapper>
      </>
    );
  }
}

export default App;
