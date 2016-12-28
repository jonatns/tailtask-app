import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  description: '',
  isDisabled: Ember.computed('title', 'description', function() {
    if(this.get('title').length === 0 || this.get('description').length === 0)
      return true;
    else
      return false;
  }),
  actions: {
    addTask() {
      var task = this.get('store').createRecord('task');
      Ember.set(task, 'title', this.get('title'));
      Ember.set(task, 'description', this.get('description'));
      this.sendAction('addTask', task);
    }
  }
});
