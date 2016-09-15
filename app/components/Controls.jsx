var React = require('react');

var Controls = React.createClass({
    displayName: 'Controls',
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    // The pattern below is very nice - each button calls the same function
    // But the parameter differs based on the button
    // newStatus then will be equal to the value coded into the onClick handler
    // we then send this through props.onStatusChange and pass in the argument
    // When we render this component in its parent, we'll need to assign a click handler there
    // to deal with newStatus

    onStatusChange(newStatus) {
    	return () => {
    		this.props.onStatusChange(newStatus)
    		console.log(newStatus);
    	}
    },

    componentWillReceiveProps(nextProps) {
        console.log('will receive props', nextProps)  
    },
    
    render() {
    	var {countdownStatus} = this.props;
    	var renderStartStopButton = () => {
    		if(countdownStatus === 'started') {
    			console.log("started in controlsjsx")
    			return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
    		} else if (countdownStatus === 'paused') {
    			console.log("paused in controlsjsx")
    			return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
    		}
    	}

        return (
            <div className="controls">
                {renderStartStopButton()}
            	<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;