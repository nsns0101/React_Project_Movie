import React from 'react';

//class Component  (function Component를 쓰면 동적 state를 못씀)
class App extends React.Component {

  //생성자 함수
  constructor(props) {
    super(props);
    console.log("constructor")
  }

  //동적으로 바꿀 값을 넣을 것
  state = {
    count: 0,

  }

  _add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  }
  _minus = () => {
    this.setState(current => ({
      count: this.state.count - 1
    }));
  };

  //웹이 실행될 때 실행되는 함수
  componentDidMount() {
    console.log("componentDidMount");
  }

  //웹이 업데이트 될 때 실행
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }


  render() {  //React는 Class의 render메서드를 자동실행
    return (
      <div>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this._add}>Add</button>
        <button onClick={this._minus}>Minus</button>
      </div>
    );
  };
}


export default App;
