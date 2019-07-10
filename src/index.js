 import React from 'react';
 import ReactDOM from 'react-dom';

function Blog(props){
	const sidebar=(
		<ul>
			{props.posts.map((post)=>
				<li key={post.id}>
					{post.title}
				</li>
				)}
		</ul>
	);
	const content=props.posts.map((post)=>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>	
		</div>
	);
	return(
		<div>
			{sidebar}
			<hr/>
			{content}
		</div>
	)
}
const posts=[
	{id:1,title:'hello lemon',content:'welcome to lemon`s world'},
	{id:2,title:'Ins',content:'there are many ins'}
]
ReactDOM.render(
	<Blog posts={posts}/>,
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
 
