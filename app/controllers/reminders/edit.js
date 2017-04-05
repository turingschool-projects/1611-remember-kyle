import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateReminder() {
      this.transitionToRoute('reminders')
    }
  }
});


