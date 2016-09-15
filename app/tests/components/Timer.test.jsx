var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm')
var Clock = require('Clock')
var Countdown = require('Countdown');
var Timer = require('Timer');


describe('Timer', () => {
	it('should exist' ,() => {
		expect(Timer).toExist();
	})

	it('after starting timer count should increase', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Timer />);
		countdown.handleStatusChange('started');

		setTimeout(() => {
			expect(countdown.state.count).toBeGreaterThan(0);
			done();
		}, 1500)
	})


	it('after pausing countdown, count should stay the same', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Timer />);
		countdown.handleStatusChange('started');
		countdown.setState({count:3})
		countdown.handleStatusChange('paused');
		setTimeout(() => {
			expect(countdown.state.count).toEqual(3);
			done();
		}, 1500)
	})

	it('after clearing timer, count should reset', () => {
		var countdown = TestUtils.renderIntoDocument(<Timer />);
		countdown.handleStatusChange('started');
		countdown.setState({count:3})
		countdown.handleStatusChange('stopped');
		expect(countdown.state.count).toBe(0)
	})			
})