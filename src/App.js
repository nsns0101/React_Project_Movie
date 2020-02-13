import React from 'react';
import axios from 'axios';    //fetch로 get하는 것 보다 시간 절약

//class Component  (function Component를 쓰면 동적 state를 못씀)
class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],

  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log("a" + movies);
    this.state.isLoading = false;
  }

  //render 함수가 실행되면 호출하는 함수
  componentDidMount() { //render가 되면 실행하는 함수
    // console.log("compontDidMount 함수 실행");
    this.getMovies();
  }

  render() {  //React는 Class의 render메서드를 자동실행
    // console.log("render 함수 실행");     
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );

  };
}


export default App;
