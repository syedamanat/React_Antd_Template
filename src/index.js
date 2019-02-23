import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Icon, Affix, Button } from 'antd';//Add UI components as per need

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    

    
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
