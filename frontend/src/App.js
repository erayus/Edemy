import React, {Component} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.css';
import axios from 'axios';
import CustomLayout from './containers/Layout.container';

class  App extends Component {

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => console.log(res))
  }


  render(){
    return (
      <div className="App">
        <CustomLayout></CustomLayout>
      </div>
    );
  }
}

export default App;
