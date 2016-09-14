var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm')
var Clock = require('Clock')


describe('CountdownForm', () => {
	it('should exist', () => {
		expect(CountdownForm).toExist(); // confirms module is loading
	})

	// Illustrates how to test a form where all it does is call a function
	// That gets passed into the parent
	it('should call onSetCountdown if valid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		expect($el).toExist();
		countdownForm.refs.seconds.value = '11';
		TestUtils.Simulate.submit($el.find('.countdown-form')[0]);
		expect(spy).toHaveBeenCalledWith(11);
	})

	it('should NOT call onSetCountdown if invalid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		expect($el).toExist();
		countdownForm.refs.seconds.value = '11r';
		TestUtils.Simulate.submit($el.find('.countdown-form')[0]);
		expect(spy).toNotHaveBeenCalled(); // should not call
	})

	// Test handleCountdown


})

