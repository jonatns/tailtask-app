import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-place-autocomplete', 'Integration | Component | g place autocomplete', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{g-place-autocomplete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#g-place-autocomplete}}
      template block text
    {{/g-place-autocomplete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
