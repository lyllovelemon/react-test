/**
 * Created by admin on 2019/5/30.
 * @author lemon<李亦黎>
 */
 import React from 'react';
 import ReactDOM from 'react-dom';

  class Clock extends React.Component{
	  constructor(props){
		  super(props);
		  this.state={date:new Date()};
	  }
	  componentDidMount(){
		  this.timerId=setInterval(
			  ()=>this.tick(),
			  1000
		  );
	  }
	  componentWillUnmount(){
		  clearInterval(this.timerId);
	  }
	  tick(){
		  this.setState({
			  date:new Date()
		  });
	  }
	  render(){
		return (
			<div>
			  <h1>Hello, world!</h1>
			  <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		  );
	  }
  }
  
  ReactDOM.render(
	<Clock />,
	document.getElementById('root')
	);
  
//  function Comment(props){
// 	 return(
// 		 <div className="Comment">
// 			 <UserInfo user={props.author}/>
// 			 <div className="Comment-text">
// 				 {props.text}
// 			 </div>
// 			 <div className="Comment-date">
// 				 {props.date}
// 			 </div>
// 		 </div>
// 	 )
//  }
//  function UserInfo(props){
// 	 return(
// 		 <div className="UserInfo">
// 			 <Avatar user={props.user}/>
// 			 <div className="UserInfo-name">
// 				 {props.user.name}
// 			 </div>
// 		 </div>
// 	 )
//  }
//  function Avatar(props) {
// 	return (
// 	  <img className="Avatar"
// 		src={props.user.avatarUrl}
// 		alt={props.user.name}
// 	  />
  
// 	);
//   }
//   function sum(a,b){
// 	  return a+b;
//   }
//   function withdraw(account,amount){
// 	  account.total-=amount;
//   }
 
