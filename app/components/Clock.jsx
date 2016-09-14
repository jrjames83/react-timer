var React = require('react');

var Clock = React.createClass({
	formatSeconds: function(totalSeconds) {
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds / 60);
		seconds < 10 ? seconds = '0' + seconds : seconds
		minutes < 10 ? minutes = '0' + minutes : minutes
		return minutes + ':' + seconds;
	},
	getDefaultProps() {
	    return {
	        totalSeconds: 0
	    };
	},
	propTypes: {
	    totalSeconds: React.PropTypes.number
	},
    displayName: 'Clock',
    render() {
    	var {totalSeconds} = this.props;
        return (
            <div className="clock">
            	<span className="clock-text">
            		{this.formatSeconds(totalSeconds)} 
            	</span>
            </div>
        );
    }
});

module.exports = Clock;