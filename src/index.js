 import React from 'react';
 import ReactDOM from 'react-dom';

class NameForm extends React.Component{
	constructor(props){
		super(props);
		this.state={value:''};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({value:event.target.value});
	}
	handleSubmit(event){
		alert("提交的名字"+this.state.value);
		event.preventDefault();
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					名字:
					<input type='text' value={this.state.value} onChange={this.handleChange}/>
				</label>
				<input type='submit' value="提交"/>	
			</form>
		)
	}
}
ReactDOM.render(
	<NameForm/>,
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
 
