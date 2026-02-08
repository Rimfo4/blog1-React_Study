/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

// function MakeClick() {
//   return (
//     <div>
//       <span> Total Click: {cnt} </span>
//       <button id="btn" onClick={BtnClick}>
//         Click me
//       </button>
//     </div>
//   );
// }

// Component 문법(무조건 대문자로 시작)
function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}
// function list
function App() {
  // ES6 문법
  let [cnt, cntChange] = useState(0);

  let [text, textC] = useState([
    '돈가스 먹고 싶다',
    '복근 운동 2번 다시는 안해',
    '사실 할거지롱',
  ]);

  function textChange() {
    // Array, Object state 데이터 수정 방법
    // state를 직접 건들지 않고 복사본을 만든다.
    // 복사할 때 참조형 변수는 값을 공유하기에 ...을 붙이면 완전 다른 복사본을 만들 수 있음.

    const newText = [...text];
    newText[0] = '김치찌개 먹고 싶다';
    textC(newText);
  }
  let date = '2월 7일 발행.';

  return (
    <div className="App">
      <nav>
        {/* JSX에서 class는 className으로 */}
        <div className="black-nav">
          {/* 내부 style 지정은 object 자료형 느낌으로 */}
          <div style={{ color: 'red' }}>개발 Blog</div>
        </div>
        <button onClick={textChange}>버튼</button>
      </nav>
      <div className="list-main">
        <div className="list">
          <h3>
            {/* event는 속성처럼 작성 그리고 {}안에는 무조건 함수, event 앞에 on을 붙여야함 */}
            이건 그냥 글 입니다.{' '}
            <span
              onClick={() => {
                cntChange(cnt + 1);
              }}
            >
              👍
            </span>
            {cnt}
          </h3>
          <p>{date}</p>
          <hr />
        </div>
        <div className="list">
          <h3>{text[0]}</h3>
          <p>{date}</p>
          <hr />
        </div>
        <div className="list">
          <h3>{text[1]}</h3>
          <p>{date}</p>
          <hr />
        </div>
        <div className="list">
          <h3>{text[2]}</h3>
          <p>{date}</p>
          <hr />
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default App;
