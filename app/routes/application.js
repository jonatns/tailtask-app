import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      tasks: this.store.findAll('task')
    });
  },
  actions: {
    addTask(task) {
      task.save();
    },
    assignTask(user_id, task) {
      const user = this.store.peekRecord('user', user_id);
      task.get('users').pushObject(user);
      task.save();
    }
  }
});
