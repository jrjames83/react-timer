var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    displayName: 'Timer',
    render() {
        return (
            <div>
            <h1>Timer - Clock Should Render Below</h1>
            <Clock />
            </div>
        );
    }
});

module.exports = Timer;