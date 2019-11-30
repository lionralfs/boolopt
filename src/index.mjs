/**
 * @param  {Array<boolean>} values
 * @return {{get: (index: number) => boolean, set: (index: number, value: boolean) => void}}
 */
export default (...values) => {
  let value = values.reduce((acc, v, i) => acc + (v << i), 0);

  return {
    get: i => !!(value & (1 << i)),
    set: (i, v) => {
      value |= 1 << i;
    }
  };
};
