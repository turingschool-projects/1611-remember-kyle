import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveReminder() {
      const title = this.get('title')
      const date = this.get('date')
      const notes = this.get('notes')
      console.log(title, date, notes)
      this.post('store')
    }
  }
});
