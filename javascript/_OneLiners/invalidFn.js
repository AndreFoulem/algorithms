const id = Math.random().toString(36).slice(2);
console.log(id);

function fn(varr) {
  const invalidMsg = invalid(varr);
  if (invalidMsg) return invalidMsg;

  return 'valid';
}

function invalid(param) {
  // if (!param) return 'falsy';

  if (typeof param === 'undefined') return 'undefined value';
  if (typeof param === 'string') {
    if (param.length === 0) return 'empty string';
  }
  if (Array.isArray(param)) {
    if (param.length === 0) return 'empty array';
  }
  if (!param) {
    if (param !== 0) {
      return 'value is null';
    }
  }
}

console.log(fn(null));
