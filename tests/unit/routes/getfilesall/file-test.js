import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | getfilesall/file', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:getfilesall/file');
    assert.ok(route);
  });
});
