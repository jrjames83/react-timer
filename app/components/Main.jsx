var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');


var Main = (props) => {
    return (
	    <div>
	   	 <Nav />
	     <div className="row">
	       <div className="medium-6 large-4 columns small-centered">
	       <p> Main.jsx rendered</p>
	         {props.children}
	       </div>
	     </div>		 	
		</div>
    );	
} 

module.exports = Main;