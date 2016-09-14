var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

// Counter component is a presentational component that maintains state
// But also interacts with our countdown form component (child)

var Countdown = React.createClass({
	getInitialState() {
	    return {
	        count: 0,
	        countdownStatus: 'stopped'  
	    };
	},

    displayName: 'Countdown',
    
    handleOnSetCountdown(seconds) {
    	console.log("updating state " + seconds)
    	this.setState({
    		count: seconds,
    		countdownStatus: 'started'
    	})
    },

    // Component lifescycle method when state changes
    componentDidUpdate(prevProps, prevState) {
    	console.log("component did update")
  		if(this.state.countdownStatus !== prevState.countdownStatus) {
  			switch (this.state.countdownStatus) {
  				case 'started':
  					this.startTimer();
  					break;
  			}
  		}
	},
	startTimer() {
		this.timer = setInterval(() => {
			console.log("interval ran")
			var newCount = this.state.count - 1
			this.setState({
				count: newCount >= 0 ? newCount : 0
			})

		}, 1000)
	},

    render() {
    	var {count} = this.state;

        return (
            <div>
            	<Clock totalSeconds={count} />
            	<CountdownForm onSetCountdown={this.handleOnSetCountdown}/>
            </div>
        );
    }
});

module.exports = Countdown;