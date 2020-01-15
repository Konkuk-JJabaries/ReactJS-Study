import React, { Component } from "react";
import "./SubHeader.scss";

class SubHeader extends Component {
  render() {
    return (
      <div className="sub-header">
        <div className="sub-header-info">
          <div className="sub-header-title">
            전체
            <div className="sub-header-search">
              <img
                src="https://talk.op.gg/images/icon-write@2x.png"
                width="24px"
              />
            </div>
          </div>
        </div>
        <div className="sub-header-category">
          <ul>
            <li>
              <a href="#">
                <img src="https://talk.op.gg/images/icon-new@2x.png" />
                <span>인기</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://talk.op.gg/images/icon-new@2x.png" />
                <span>최신</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://talk.op.gg/images/icon-new@2x.png" />
                <span>TOP</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://talk.op.gg/images/icon-new@2x.png" />
                <span>10추</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SubHeader;
