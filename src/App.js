import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var arr=new Array(10);
    for(var i=1;i<11;i++)
    {
     arr[i]=new Array(10);
      for(var j=1;j<11;j++)
      {
        arr[i][j-1]=i*j;
      }
      
    }
    return (
      <div className="App">

        {document.write(arr)}
      </div>
    );
  }
}

export default App;
