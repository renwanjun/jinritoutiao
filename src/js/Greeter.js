// Greeter.js

import React, {Component} from 'react'
import config from '../assets/config.json';

import styles from '../css/Greeter.css';

// React.createClass 组件类 第一个字母必须大写且只能包含一个顶层标签
// this.props.children 组件的所有子节点
const Header=React.createClass({
  propTypes:{        // 验证组件实例的属性是否符合要求
    titleProp:React.PropTypes.string
  },
  getDefaultProps(){  // 设置组件属性的默认值
    return {
      titleProp:''
    }
  },
  
  getInitialState:function(){
    return {
      liked:false
    };
  },
  handleClick:function(event){
    this.setState({liked:!this.state.liked});
  },
  render:function(){
    return (
      <div>以前的方式创建组件</div>
      )
  }
});

// React.Component(ES6)
class Greeter extends Component{
  constructor(props){
    super(props);
    this.state={
      liked:false
    }
    //使用React.Component创建组件，需要通过在constructor中调用super()将props传递给React.Component。另外react 0.13之后props必须是不可变的。
  }
  handleClick(){
    console.log(this);
  }
  // handleClick=()=>{
  // }
  render() {
  //   console.log(this.props);
    // propTypes: {
    // title: React.PropTypes.string.isRequired,
    // },
    return (
      
      <div className={styles.root} onClick={this.handleClick.bind(this)}
      >   
        {config.greetText} 
        {this.props.children}
      </div>
    );
  }
}

Greeter.propTypes={
  titleProp:React.PropTypes.string
}
Greeter.defaultProps={
  titleProp:""
}

export default Greeter


// var config=require('./config.json');
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };