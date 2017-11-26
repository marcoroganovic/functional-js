export const Box = (val) => ({
  chain: f => f(val),
  map: f => Box(val),
  fold: f => f(val)
});

export const nullable = val => {
  return val !== null ? Right(val) : Left(null)
}

export const tryCatch = fn => {
  try {
    return Right(fn());
  } catch(err) {
    return Left(err);
  }
}

export const Left = val => ({
  chain: f => f(val),
  map: f => val, 
  fold: (fail, success) => fail(val)
});

export const Right = val => ({
  chain: f => f(val),
  map: f => Right(val),
  fold: (fail, success) => success(val)
});
