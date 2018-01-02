import React from 'react';
import ReactDOM from 'react-dom';

class MyComponen extends React.Component{
render(){
    return(
        <h2>Hello World!!!</h2>
    );
  }
}

ReactDOM.render(
    <MyComponen/>,document.getElementById('content')
);