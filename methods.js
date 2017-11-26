const isNumber = x => typeof x === "number";
const isString = x => typeof x === "string";
const isNull = x => x === null;
const isUndefined = x => x === undefined;
const invalidValue = x => isNull(x) || isUndefined(x);p

export const compose = (f, g) => x => f(g(x));
export const pipe = (f, g) => x => g(f(x));

export const map = (list, cb) => {
  if(list.length === 0) {
    return [];
  } else if(list.length === 1) {
    return [cb(list[0], 0)];
  } else {
    return [cb(list[0]), ...map(list.slice(1), cb)];
  }
}

export const filter = (list, cb) => {
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


export const reduce = (list, cb, initial) => {
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
