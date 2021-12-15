import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | getfiles/files', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:getfiles/files');
    assert.ok(route);
  });
});
