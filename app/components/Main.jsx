var React = require('react');


// var Main = React.createClass({
//     render() {
//         return (
//         <div>
//          <Nav />
// 		 <h2> Main Component </h2>
// 		 	{this.props.children}
// 		</div>
// 	    );
//     }
// });


// Redo as a functional component (need not manage state)
var Main = (props) => {
    return (
	    <div>
	     <div className="row">
	       <div className="medium-6 large-8 columns small-centered">
	       <p> Main.jsx rendered</p>
	         {props.children}
	       </div>
	     </div>		 	
		</div>
    );	
} 

module.exports = Main;