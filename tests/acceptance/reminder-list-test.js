/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage redirects to reminders page', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('.reminder-item:first');

  andThen(() => {
    assert.equal(currentURL(), '/reminders/reminder/1');
    assert.equal(Ember.$('.reminder-item:first').text().trim(), Ember.$('.reminder-title').text().trim());
  });
});

test('Display prompt if no reminders are present', function(assert) {
  visit('/reminders');

  andThen(() => {
    assert.equal(find('.no-reminders-notice').length, 1);
  });
});

test('edit on an individual item', function(assert) {
  server.createList('reminder', 1);

  visit('/reminders');
  click('.reminder-item:first');
  click('#edit-reminder-button');

  andThen(() => {
    assert.equal(currentURL(), '/reminders/reminder/edit/1')
  })

  fillIn('#title-input', 'Remember this');
  click('#save-reminder-button');

  andThen(() => {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item:first').text().trim(), 'Remember this');
  });
});

test('Delete on an individual item from the list', function(assert) {
  server.createList('reminder', 3);

  visit('/reminders');
  click('.delete-reminder-button:first');

  andThen(() => {
    assert.equal(Ember.$('.reminder-item').length, 2);
  })
});

test('Delete on an individual item from the single view', function(assert) {
  server.createList('reminder', 3);

  visit('/reminders');
  click('.reminder-item:first');
  click('.delete-reminder-button:first');

  andThen(() => {
    assert.equal(Ember.$('.reminder-item').length, 2);
  })
});


