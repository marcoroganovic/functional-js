const isNumber = x => typeof x === "number";
const isString = x => typeof x === "string";
const isNull = x => x === null;
const isUndefined = x => x === undefined;
const invalidValue = x => isNull(x) || isUndefined(x);

const compose = (f, g) => x => f(g(x));
const pipe = (f, g) => x => g(f(x));

const map = (list, cb) => {
  if(list.length === 0) {
    return [];
  } else if(list.length === 1) {
    return [cb(list[0], 0)];
  } else {
    return [cb(list[0]), ...map(list.slice(1), cb)];
  }
}

const filter = (list, cb) => {
  if(list.length === 0) {
    return [];
  } else if(list.length === 1) {
    return cb(list[0]) ? [list[0]] : [];
  } else if(cb(list[0])) {
    return [list[0], ...filter(list.slice(1), cb)];
  } else {
    return [...filter(list.slice(1), cb)];
  }
}


const reduce = (list, cb, initial) => {
  if(list.length === 0) {
    return initial
  } else {
    return reduce(
      list.slice(1), 
      cb, 
      cb(
        invalidValue(initial) ? (
          isNumber(list[0]) ? 0 : isString(list[0]) ? "" : list[0]
        ) : initial, list[0]
      )
    );
  }
}

exports.compose = compose;
exports.pipe = pipe;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
