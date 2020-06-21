import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('hello');
  }
  componentDidMount(){
    console.log('component rendered');
  }
  componentDidUpdate(){
    console.log('I just updated')
  }
  componentWillUnmount(){
    console.log('component is dead)');
  }
  state={
    count : 0
  };
  add=() =>{
    console.log('add');
    //this.state.count = 1;
    //this.setState({count: this.state.count + 1});  //성능 이슈
    this.setState(current => ({count : current.count + 1,}));// 함수를 사용하면 성능 해결, current에는 현재 state가 넘어옴
  };
  minus=() =>{
    console.log('minus');
    //this.state.count = -1;
    //this.setState({count: this.state.count -1});
    this.setState(current => ({count : current.count - 1,}));
  }
  render(){
    console.log('render');
    return (
    <div>
      <h1>the number is :{this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
export default App;
