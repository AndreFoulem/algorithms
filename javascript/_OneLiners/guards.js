function isObjectValid(obj) {
  if (!(obj && Object.keys(obj).length > 0 && obj.constructor === Object)) {
    return 'must provide an object with min 1 entry';
  }

  return 'valid';
}

console.log(isObjectValid({ id: 'asdf', ids: 'asdf' }));

function isArrayValid(arr) {
  if (!Array.isArray(arr)) return 'must provide an array';
  if (arr.length === 0) return 'array must not be empty';

  return 'valid';
}

console.log(isObjectValid());
