import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  notes: DS.attr('string'),
  date: DS.attr('date')
});
