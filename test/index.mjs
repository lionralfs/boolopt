import assert from "assert";
import boolopt from "../src/index.mjs";

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
}

{
  const { get, set } = boolopt();
  assert.strictEqual(get(0), false);
  assert.strictEqual(get(1), false);
  set(1, true);
  assert.strictEqual(get(0), false);
  assert.strictEqual(get(1), true);
}
