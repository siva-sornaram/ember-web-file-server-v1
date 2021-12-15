import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | getfiles/file', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:getfiles/file');
    assert.ok(route);
  });
});
