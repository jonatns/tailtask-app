import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const input = this.$('.autocomplete-input')[0];
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    const _this = this;
    autocomplete.addListener('place_changed', function() {
      _this.sendAction('placeChanged', autocomplete.getPlace());
    });
  }
});
