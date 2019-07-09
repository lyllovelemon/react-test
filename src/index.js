/**
 * Created by admin on 2019/5/30.
 * @author lemon<李亦黎>
 */
 import React from 'react';
 import ReactDOM from 'react-dom';


 function WarningBanner(props) {
	if (!props.warn) {
	  return null;
	}
  
	return (
	  <div className="warning">
		Warning!
	  </div>
	);
  }
  
  class Page extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {showWarning: true};
	  this.handleToggleClick = this.handleToggleClick.bind(this);
	}
  
	handleToggleClick() {
	  this.setState(state => ({
		showWarning: !state.showWarning
	  }));
	}
  
	render() {
	  return (
		<div>
		  <WarningBanner warn={this.state.showWarning} />
		  <button onClick={this.handleToggleClick}>
			{this.state.showWarning ? 'Hide' : 'Show'}
		  </button>
		</div>
	  );
	}
  }
  
  ReactDOM.render(
	<Page />,
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
 
