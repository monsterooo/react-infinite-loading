import React, { Component } from 'react';
import Infinite from 'react-infinite-loading';

class ScrollWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {posts:[], loading: false};
    this.handleLoading = this.handleLoading.bind(this);
  }
  componentDidMount() {
    // 模拟拉取数据
    for(var i = 0, il  = 15; i < il; i++) {
      this.state.posts.push(randomColor1());
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
    }, 10000);
  }
  getPost() {
    return this.state.posts.map((post, i) => {
      return (<article className="post" style={{background: post, width: '80%', height: 40}} key={i}>{i}</article>)
    })
  }
  render() {
    return (
      <div className="container" style={{width: 80}}>
        <Infinite handleLoading={this.handleLoading} loading={this.state.loading} isLoading={false}>
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
export default ScrollWindow;
