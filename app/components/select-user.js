import Ember from 'ember';

export default Ember.Component.extend({
  selectedUser: null,
  isNotUserSelected: Ember.computed('selectedUser', function() {
    console.log('changed');
    if(this.get('selectedUser') === null)
      return true;
    else
      return false;
  }),
  usersList: Ember.computed('task.users', function() {
    const users = this.get('users');
    const taskUsers = this.get('task.users');
    return users.filter(val => !taskUsers.includes(val));
  }),
  actions: {
    selectUser(user) {
      this.set('selectedUser', user);
    },
    assignTask() {
      var user_id = this.get('selectedUser');
      this.set('selectedUser', null);
      this.sendAction('assignTask', user_id, this.get('task'));
    }
  }
});
