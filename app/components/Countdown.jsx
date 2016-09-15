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

    // RIght before removed from dom
    componentWillUnmount() {
       console.log("component did unmount")
       clearInterval(this.timer);
       this.timer = undefined;
    },

    
    handleOnSetCountdown(seconds) {
    	//console.log("updating state " + seconds)
    	this.setState({
    		count: seconds,
    		countdownStatus: 'started'
    	})
    },

    // Component lifescycle method when state changes or props change
    componentDidUpdate(prevProps, prevState) {
    	//console.log("component did update")
  		if(this.state.countdownStatus !== prevState.countdownStatus) {
  			switch (this.state.countdownStatus) {
  				case 'started':
  					this.startTimer();
  					break;
  				case 'stopped':
  					this.setState({count:0})
  				case 'paused':
  					clearInterval(this.timer);
  					this.timer = undefined;
  					break;
  			}
  		}
	},
	startTimer() {
		this.timer = setInterval(() => {
			//console.log("interval ran")
			var newCount = this.state.count - 1
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if (newCount === 0) {
				this.setState({countdownStatus: 'stopped'})
			}

		}, 1000)
	},

	handleStatusChange(newStatus) {
		this.setState({
			countdownStatus: newStatus
		})
	},
    render() {
    	var {count, countdownStatus} = this.state;
    	var renderControlArea  = () => {
    		if (countdownStatus !== 'stopped') {
    			return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
    		} else {
    			return <CountdownForm onSetCountdown={this.handleOnSetCountdown}/>;
    		}
    	}

        return (
            <div>
            	<h1 className="page-title">Countdown App</h1>
            	<Clock totalSeconds={count} />
            	{renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;