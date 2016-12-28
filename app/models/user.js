import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr(),
  tasks: DS.hasMany('task', {async: true})
});
