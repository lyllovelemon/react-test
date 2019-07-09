/**
 * Created by admin on 2019/5/30.
 * @author lemon<李亦黎>
 */
 import React from 'react';
 import ReactDOM from 'react-dom';

function UserGreeting(props){
	return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
	return <h1>Please sign up.</h1>
}
function Greeting(props){
	const isLoggedIn=props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting/>
	}
	return <GuestGreeting/>
}
function LoginButton(props){
	return(
		<button onClick={props.onClick}>
			Login
		</button>
	);
}
function LogoutButton(props){
	return(
		<button onClick={props.onClick}>
			Logout
		</button>
	)
}
class LoginControl extends React.Component{
	constructor(props){
		super(props);
		this.handleLoginClick=this.handleLoginClick.bind(this);
		this.handleLoginOutClick=this.handleLoginOutClick.bind(this);
		this.state={isLoggedIn:false};
	}
	handleLoginClick(){
		this.setState({isLoggedIn:true});
	}
	handleLoginOutClick(){
		this.setState({isLoggedIn:false});
	}
	render(){
		const isLoggedIn=this.state.isLoggedIn;
		let button;
		if(isLoggedIn){
			button=<LoginButton onClick={this.handleLoginOutClick}/>
		}
		else{
			button=<LoginButton onClick={this.handleLoginClick}/>
		}
		return(
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}
			</div>
		)
	}
}
  ReactDOM.render(
	<LoginControl/>,
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
 
