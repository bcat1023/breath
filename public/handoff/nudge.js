import reminders from '/api/reminders.json' with { type: 'json' };
var nudge = document.getElementById('nudge')

var dice = Math.floor(Math.random() * reminders.dice.total) + 1

nudge.innerText = reminders.reminders[dice]