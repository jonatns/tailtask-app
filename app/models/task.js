import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  users: DS.hasMany('user'),
  company: DS.belongsTo('company')
});
