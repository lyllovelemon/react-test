 import React from 'react';
 import ReactDOM from 'react-dom';
 function FancyBorder(props) {
	return (
	  <div className={'FancyBorder FancyBorder-' + props.color}>
		{props.children}
	  </div>
	);
  }
function Dialog(props){
	return(
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	)
}
class SignUpDialog extends React.Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.handleSignUp=this.handleSignUp.bind(this);
		this.state={login:''};
	}
	render(){
		return(
			<Dialog 
			title="Mars Exploration Program"
			message="How should we refer to you?"
			>
				<input value={this.state.login}
				onChange={this.handleChange}
				/>
				<button onClick={this.handleSignUp}>
					Sign me up!
				</button>
			</Dialog>
		)
	}
	handleChange(e){
		this.setState({login:e.target.value});
	}
	handleSignUp(){
		alert(`Welcome aboard,${this.state.login}!`);
	}
}
function WelcomeDialog(){
	return(
		<Dialog
		title="Welcome"
		message="Thank you for visiting spacecraft!"
		/>
	)
}
ReactDOM.render(
	<WelcomeDialog/>,
	document.getElementById('root')
)
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
 
