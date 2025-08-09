import reminders from '/reminders.json' with { type: 'json' };
var nudge = document.getElementById('nudge')

console.log(reminders)
var dice = Math.floor(Math.random() * reminders.dice.total) + 1

nudge.innerText = reminders.reminders[dice]