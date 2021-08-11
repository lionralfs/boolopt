import assert from 'assert';
import boolopt from '../src/index.mjs';

{
  const { get } = boolopt();
  assert.strictEqual(get(0), false);
  assert.strictEqual(get(1), false);
}

{
  const { get, set } = boolopt(false, false, true);

  assert.strictEqual(get(0), false);
  assert.strictEqual(get(1), false);
  assert.strictEqual(get(2), true);

  set(1, true);
  assert.strictEqual(get(0), false);
  assert.strictEqual(get(1), true);
  assert.strictEqual(get(2), true);

  set(0, true);
  assert.strictEqual(get(0), true);
  assert.strictEqual(get(1), true);
  assert.strictEqual(get(2), true);

  set(0, false);
  assert.strictEqual(get(0), false);
  assert.strictEqual(get(1), true);
  assert.strictEqual(get(2), true);
}

{
  const OPTIONS = Object.freeze({ HUNGRY: 0, TIRED: 1 });

  const { get, set } = boolopt();

  assert.strictEqual(get(OPTIONS.HUNGRY), false);
  assert.strictEqual(get(OPTIONS.TIRED), false);

  set(OPTIONS.HUNGRY, true);
  set(OPTIONS.TIRED, true);

  assert.strictEqual(get(OPTIONS.HUNGRY), true);
  assert.strictEqual(get(OPTIONS.TIRED), true);
}
