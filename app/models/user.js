import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr(),
  company: DS.belongsTo('company'),
  tasks: DS.hasMany('task')
});
