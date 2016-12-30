import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    toggle() {
      Ember.$('.wrapper .ui.sidebar')
        .sidebar({
          context: '.wrapper .bottom.segment',
          transition: 'overlay'
        })
        .sidebar('toggle');
    }
  }
});
