import Ember from 'ember';

export default Ember.Component.extend({
  id: null,
  didInsertElement() {
    this._super(...arguments);
    var options = {
      center: {
        lat: parseFloat(this.get('latitude')),
        lng: parseFloat(this.get('longitude'))
      },
      disableDefaultUI: true,
      zoomControl: true,
      zoom: this.get('zoom')
    };
    var map = new window.google.maps.Map(this.$('.map-canvas')[0], options);
    this.sendAction('setMap', map);

    const markers = this.get('markers');

    const _this = this;
    markers.forEach(marker => {
      if(this.get('isDraggable')) {
        marker.setOptions({draggable: true});
      }

      marker.addListener('dragend', function(event) {
        _this.sendAction('onDrag', event.latLng.lat(), event.latLng.lng());
      });
      marker.setMap(map);
    });
  }
});
