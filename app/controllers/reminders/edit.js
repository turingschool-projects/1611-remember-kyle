import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateReminder() {
      const title = this.get('title');
      const date = this.get('date');
      const notes = this.get('notes');
      this.get('store').findRecord('reminder', this.id)
      .then((foundReminder) => {
        foundReminder.set('title', title)
      })
    }
  }
});
