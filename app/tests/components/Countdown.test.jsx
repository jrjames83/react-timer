var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm')
var Clock = require('Clock')
var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist(); // confirms module is loading
	});

	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', (done) =>{
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleOnSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');
			
			// startTimer() will be called via handleOnSetCountdown
			setTimeout(() => {
				expect(countdown.state.count).toBeLessThan(10);
				done();
			}, 1500)
			
		})
	})

	describe('countdown can never be negative', () => {
		it('set to 2 seconds, wait 3, should not be negative', (done) =>{
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleOnSetCountdown(1);

			expect(countdown.state.count).toBe(1);
			expect(countdown.state.countdownStatus).toBe('started');
			
			// startTimer() will be called via handleOnSetCountdown
			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 1100)
			
		})
	})

	// When pause status is checked, countdown should not update

	describe('countdown should halt when paused', () => {
		it('when starting, then pausing, countdown should stay same', (done) =>{
			// countdown starts as paused
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			// Calling handleOnSet begins it
			countdown.handleOnSetCountdown(2);
			// Now change to paused
			countdown.handleStatusChange('paused');
			expect(countdown.state.count).toBe(2);

			expect(countdown.state.countdownStatus).toBe('paused');
			setTimeout(() => {
				expect(countdown.state.count).toBe(2);
				expect(countdown.state.countdownStatus).toBe('paused');
				done();
			}, 1100)
			// startTimer() will be called via handleOnSetCountdown
			// setTimeout(() => {
			// 	expect(countdown.state.count).toBe(0);
			// 	done();
			// }, 3000)
			
		})
	})

	// Make sure count is zero after status is set to stopped
	describe('countdown should clear when stopped', () => {
		it('when stopping, count should clear', (done) =>{
			// countdown starts as paused
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			// Calling handleOnSet begins it
			countdown.handleOnSetCountdown(2);
			// Now change to paused
			countdown.handleStatusChange('stopped');
			expect(countdown.state.count).toBe(0);

			expect(countdown.state.countdownStatus).toBe('stopped');
			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			}, 1100)
			// startTimer() will be called via handleOnSetCountdown
			// setTimeout(() => {
			// 	expect(countdown.state.count).toBe(0);
			// 	done();
			// }, 3000)
			
		})
	})

})
















