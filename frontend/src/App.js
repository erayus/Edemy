import React, {Component} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.css';
import CustomLayout from './containers/Layout.container';

class  App extends Component {



  render(){
    return (
      <div className="App">
        <CustomLayout></CustomLayout>
      </div>
    );
  }
}

export default App;
