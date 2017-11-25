import React, { Component } from 'react';
import Infinite from '../src';
import pleasejs from 'pleasejs';

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {posts:[], loading: false};
    this.handleLoading = this.handleLoading.bind(this);
  }
  componentDidMount() {
    // 模拟拉取数据
    for(var i = 0, il  = 15; i < il; i++) {
      this.state.posts.push(pleasejs.make_color({hue: i % 360}));
    }
    this.setState(this.state.posts);
  }

  handleLoading() {
    this.setState({loading: true});
    for(var i = 0, il  = 5; i < il; i++) {
      this.state.posts.push(randomColor1());
    }
    setTimeout(() => {
      this.setState({loading: false, posts: this.state.posts});
    }, 2000);
  }
  getPost() {
    return this.state.posts.map((post, i) => {
      return (<div className="post" key={i}><div style={{background: post}}>{i}</div></div>)
    })
  }
  render() {
    return (
      <div className="container base">
        <Infinite handleLoading={this.handleLoading} loading={this.state.loading} elementScroll scrollHeight={200}>
          {this.getPost()}
        </Infinite>
      </div>
    )
  }
}
//获取十六进制颜色
function randomColor1(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  if(r < 16){
   r = "0"+r.toString(16);
  }else{
   r = r.toString(16);
  }
  if(g < 16){
    g = "0"+g.toString(16);
  }else{
    g = g.toString(16);
  }
  if(b < 16){
    b = "0"+b.toString(16);
  }else{
    b = b.toString(16);
  }
  return "#"+r+g+b;
}
export default Base;
