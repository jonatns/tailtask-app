import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    register() {
      this.sendAction('register', this.get('user'), this.get('company'));
    }
  }
});
