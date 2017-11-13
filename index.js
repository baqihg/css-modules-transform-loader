module.exports = function (source) {
  return source.replace(/React.createElement([\s\S]*)/g, (value) => {
    let index = match(value, '(', ')') + 1;
    frontValue = value.slice(0, index);
    return frontValue.replace(/className\s*:\s*["']([\w]*\$[\w]* ?)*['"]/g, (value) => {
      return value.replace(/\$/g, '.').replace(/["']/g, '').replace(/className\s*:\s*/g, 'className:').replace(/ /g, '+ " " +');
    }) + value.slice(index);
  });
}

function match(source, startStr, endStr) {
  let stack = 0;
  for (let i = 0, l = source.length; i < l; i++) {
    if (source[i] === startStr) stack++;
    if (source[i] === endStr) {
      stack--;
      if (stack <= 0) return i;
    }
  };
  return 0;
}