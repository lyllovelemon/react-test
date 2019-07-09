/**
 * Created by admin on 2019/5/30.
 * @author lemon<李亦黎>
 */
 import React from 'react';
 import ReactDOM from 'react-dom';

class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state={isToggleOn:true};

		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(){
		this.setState(state=>({
			isToggleOn:!this.state.isToggleOn
		}))
	}
	render(){
		return(
			<button onClick={this.handleClick}>
				{this.state.isToggleOn?'ON':'OFF'}
			</button>
		)
	}
}
  ReactDOM.render(
	<Toggle />,
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
 
