import React from 'react';

//class Component  (function Component를 쓰면 동적 state를 못씀)
class App extends React.Component {
  //동적으로 바꿀 값을 넣을 것
  state = {
    count: 0,

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

  _add = () => {
    //setState를 쓰지않고 this.state.count = ~~ 이런 방식으로 할시 
    //class component의 render메서드를 호출하지 않으므로 setState()를 사용할 것

    // this.setState({
    //   count: this.state.count + 1 // ++연산자는 사용안함
    // });
    this.setState(current => ({
      count: current.count + 1
    }));
  }
  _minus = () => {
    this.setState(current => ({
      count: this.state.count - 1
    }));
  };

}


export default App;
