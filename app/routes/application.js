import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
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
