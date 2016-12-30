import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if(this.get('session.isAuthenticated')) {
      this.transitionTo('tasks');
    } else {
      this.transitionTo('register');
    }
  },

  model() {
    return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
      company: this.store.createRecord('company')
    });
  },

  actions: {
    register(user, company) {
      const _this = this;
      company.save().then(company => {
        user.set('company', company);
        user.save().then(() => {
          _this.transitionTo('login');
        });
      });
    }
  }
});
