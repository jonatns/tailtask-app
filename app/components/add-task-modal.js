import Ember from 'ember';

export default Ember.Component.extend({
  geolocation: Ember.inject.service(),
  map: null,
  searchAddress: '',
  markers: [],
  currentLat: null,
  currentLng: null,
  isMapLoading: true,
  didInsertElement() {
    this._super(...arguments);
    this.set('markers', []);
    Ember.$('.ui.modal.add-task')
      .modal('setting', 'closable', false)
      .modal('setting', 'autofocus', false)
      .modal('show');
    this.loadMap();
  },
  loadMap() {
    const _this = this;
    Ember.$('.autocomplete-input').attr('disabled', true);
    this.get('geolocation').getLocation().then(function(geoObject) {
      if(!(_this.get('isDestroyed') || _this.get('isDestroying')) ) {
        _this.set('currentLat', geoObject.coords.latitude);
        _this.set('currentLng', geoObject.coords.longitude);
        var myLatLng = new window.google.maps.LatLng(parseFloat(geoObject.coords.latitude), parseFloat(geoObject.coords.longitude));
        var m = new window.google.maps.Marker({
          position: myLatLng
        });
        _this.get('markers').push(m);
        Ember.$('.autocomplete-input').removeAttr('disabled');
        _this.set('isMapLoading', false);
      }
    });
  },
  actions: {
    onDrag(lat, lng) {
      this.set('currentLat', lat);
      this.set('currentLng', lng);
    },
    setMap(map) {
      this.set('map', map);
      const _this = this;
      this.get('map').addListener('click', function(e) {
        _this.get('markers')[0].setPosition(e.latLng);
        _this.set('currentLat', e.latLng.lat());
        _this.set('currentLng', e.latLng.lng());
      });
    },
    placeChanged(place) {
      if(place.geometry !== undefined) {
        this.get('markers')[0].setPosition(place.geometry.location);
        this.get('map').setCenter(place.geometry.location);
        this.get('map').setZoom(17);
      }
    },
    closeAddTaskModal() {
      this.sendAction('closeAddTaskModal');
    }
  }
});
