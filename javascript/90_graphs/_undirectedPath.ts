const graphUndirected = {
  i: ['j', 'k'],
  j: ['i'],
  k: ['i', 'm', 'l'],
  m: ['k'],
  l: ['l'],
  o: ['n'],
  n: ['o'],
}

/**
 *   i - j
 *   to +
 *   k - l
 *   to
 *   m
 *
 *   o - n
 */

//& entity: graph | src | dist | neighbor | visited
//* src: i    dist: l

//* 1 -> modify edges obj to Adjancy list
