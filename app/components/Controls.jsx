var React = require('react');

var Controls = React.createClass({
    displayName: 'Controls',
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render() {
    	var {countdownStatus} = this.props;
    	var renderStartStopButton = () => {
    		if(countdownStatus === 'started') {
    			return <button className="button secondary">Pause</button>
    		} else if (countdownStatus === 'stopped') {
    			return <button className="button primary">Start</button>
    		}
    	}

        return (
            <div className="controls">
                {renderStartStopButton()}
            	<button className="button alert hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;