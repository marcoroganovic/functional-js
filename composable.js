const Box = (val) => ({
  chain: f => f(val),
  map: f => Box(val),
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
  map: f => val, 
  fold: (fail, success) => fail(val)
});

const Right = val => ({
  chain: f => f(val),
  map: f => Right(val),
  fold: (fail, success) => success(val)
});

exports.Box = Box;
exports.Left = Left;
exports.Right = Right;
exports.nullable = nullable;
exports.tryCatch = tryCatch;
