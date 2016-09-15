var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


// Starts at zero - once started, button chages to stop
// Clear
// Renders clock and controls

var Timer = React.createClass({
    displayName: 'Timer',
    getInitialState() {
        return {
            count: 0,
            countdownStatus: 'paused'  
        };
    },
    handleStatusChange(newStatus) {
    	console.log(newStatus, "is the new Status")
    	this.setState({countdownStatus: newStatus})
    },

    // Now somehow have to handle when clear is hit
    componentDidUpdate(prevProps, prevState) {
    	console.log("component did update", prevState.countdownStatus)
  		if(this.state.countdownStatus !== prevState.countdownStatus) {
  			switch (this.state.countdownStatus) {
  				case 'started':
  					this.startTimer();
  					break;
  				case 'stopped':
  				// Did i put too much logic in here?
  					this.setState({count:0})
  					clearInterval(this.timer)
  					this.timer = undefined;
  					this.setState({countdownStatus: 'paused'}) 	
  					break; // why is it still going though?
  				case 'paused':
  					clearInterval(this.timer);
  					this.timer = undefined;
  					break;
  			}
  		}
	},

	startTimer() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1
			this.setState({
				count: newCount
			});

		}, 1000)
	},



    render() {
        return (
            <div>
            <h1 className="page-title">Timer App</h1>
            <Clock totalSeconds={this.state.count}/>
            <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;