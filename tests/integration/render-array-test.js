import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | render array', function(hooks) {
  setupRenderingTest(hooks);

  test('rerendering array of nulls works', async function(assert) {
    this.set('items', [ false, false, false ]);
    await render(hbs`
      {{#each this.items as |item|}}
        <p>item: {{item}}</p>
      {{/each}}
    `);
    assert.dom('p').exists({ count: 3 });

    this.set('items', [ null, null, null ]);
    await settled();
    assert.dom('p').exists({ count: 3 });
  });

});
