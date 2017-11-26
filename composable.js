const Box = val => ({
  chain: f => f(val),
  map: f => Box(f(val)),
  fold: f => f(val)
});

const BoxList = val => ({
  chain: f => f(val),
  map: f => BoxList(val.map(f)),
  filter: f => BoxList(val.filter(f)),
  reduce: (f, init) => BoxList([val.reduce(f, init ? init : null)]),
  fold: f => f(val)
});

const nullable = val => {
  return val !== null ? Right(val) : Left(null)
}

const tryCatch = fn => {
  try {
    return Right(fn());
  } catch(err) {
    return Left(err);
  }
}

const Left = val => ({
  chain: f => f(val),
  map: f => Left(val), 
  fold: (fail, success) => fail(val)
});

const Right = val => ({
  chain: f => f(val),
  map: f => Right(f(val)),
  fold: (fail, success) => success(val)
});

exports.Box = Box;
exports.BoxList = BoxList;
exports.Left = Left;
exports.Right = Right;
exports.nullable = nullable;
exports.tryCatch = tryCatch;
