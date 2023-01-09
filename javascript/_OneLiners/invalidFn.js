const id = Math.random().toString(36).slice(2);
console.log(id);

function fn(varr) {
  const invalidMsg = invalidObj(varr);
  if (invalidMsg) return invalidMsg.error;
}

function invalid(param) {
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

function invalidObj(obj) {
  if (!(obj && Object.keys(obj).length > 0 && obj.constructor === Object)) {
    return { error: 'is not an empty obj' };
  }
  return null;
}

console.log(fn({ id: 'sd' }));
