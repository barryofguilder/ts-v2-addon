import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { testId } from 'ts-v2-addon/test-support';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Button>
        Hello!
      </Button>
    `);

    assert.dom(testId('button')).hasText('Hello!');
  });
});
