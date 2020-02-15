import React from "react";


class MovieDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;   //router에서 넘어온 객체
        console.log(history);
        // homepage에서 post방식으로 detail페이지로 온 것이 아니면 Movie.js에서 넘긴
        // state를 받아올 수 없으므로 undefined가 뜸
        if (location.state === undefined) {
            history.push("/");      //redirect!!
        }
    }

    render() {
        const { location } = this.props;

        //homepage에서 post방식으로 넘어온 것이면
        if (location.state) {
            return <span>{location.state.title}</span>
        }
        else {
            return null;
        }
    }
}


export default MovieDetail;