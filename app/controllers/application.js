import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  geolocation: Ember.inject.service(),
  currentLat: null,
  currentLng: null,
  isMapVisible: true,
  isMapLoading: true,
  isAddTaskModalVisible: false,
  markers: [],
  init() {
    const _this = this;
    this.get('geolocation').getLocation().then(function(geoObject) {
      _this.set('currentLat', geoObject.coords.latitude);
      _this.set('currentLng', geoObject.coords.longitude);
      var myLatLng = new window.google.maps.LatLng(parseFloat(geoObject.coords.latitude), parseFloat(geoObject.coords.longitude));
      var m = new window.google.maps.Marker({
        position: myLatLng
      });
      _this.get('markers').push(m);
      _this.set('isMapLoading', false);
    });
  },
  mapBtnLabel: Ember.computed('isMapVisible', function() {
    if(this.get('isMapVisible')) {
      return 'Hide Map';
    } else {
      return 'Show Map';
    }
  }),
  actions: {
    toggle() {
      Ember.$('.wrapper .ui.sidebar')
        .sidebar({
          context: '.wrapper .bottom.segment',
          transition: 'overlay'
        })
        .sidebar('toggle');
    },
    toggleMap() {
      this.toggleProperty('isMapVisible');
    },
    openAddTaskModal() {
      this.set('isAddTaskModalVisible', true);
    },
    closeAddTaskModal() {
      Ember.$('.ui.modal.add-task')
        .modal('hide');
      this.set('isAddTaskModalVisible', false);
    }
  }
});
