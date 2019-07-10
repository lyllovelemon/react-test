 import React from 'react';
 import ReactDOM from 'react-dom';

class FlavorForm extends React.Component{
	constructor(props){
		super(props);
		this.state={value:'coconut'};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({value:event.target.value})
	}
	handleSubmit(event){
		alert("你喜欢的风味是"+this.state.value);
		event.preventDefault();
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					选择你喜欢的风味:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">葡萄柚</option>
						<option value="lime">柠檬</option>
						<option value="coconut">椰子</option>
						<option value="mango">芒果</option>	
					</select>
				</label>
				<input type="submit" value="提交"/>
			</form>
		)
	}
}
ReactDOM.render(
	<FlavorForm/>,
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
 
