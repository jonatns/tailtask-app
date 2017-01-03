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

  actions: {
    logout() {
      var _this = this;
      this.get('session').invalidate().then(function() {
        _this.store.unloadAll();
        _this.transitionTo('login');
      });
    },
  }
});
