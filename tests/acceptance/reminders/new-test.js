import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders/new');

test('enter text into inputs and click summbit, new reminder appears on page', function(assert) {
  visit('/reminders/new');
  fillIn('#title-input', 'Remember this')
  fillIn('#date-input', 'on this day')
  fillIn('#notes-input', 'here are the details')

  click('#add-reminder-button')

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
    assert.equal(Ember.$('.reminder-item').length, 1);
    assert.equal(Ember.$('.reminder-item:last').text().trim(), 'Remember this');
  });
});
