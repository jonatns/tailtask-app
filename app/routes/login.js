import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if(this.get('session.isAuthenticated')) {
      this.transitionTo('tasks');
    } else {
      this.transitionTo('login');
    }
  },

  model() {
    return Ember.Object.create({ identification: '', password: ''});
  },
  actions: {
    login(credentials) {
      const authenticator = 'authenticator:jwt';
      const _this = this;
      this.get('session').authenticate(authenticator, credentials).then(() => {
        _this.transitionTo('tasks');
      });
    }
  }
});
