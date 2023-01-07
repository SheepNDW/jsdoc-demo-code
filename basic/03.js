/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @param {string} [o] - A optional string param
 * @param {string} [d="defaultValue"] - A optional string param with a default value
 * @returns {string} A good string
 *
 * @example
 *
 *    foo('hello')
 */
function foo(n, o, d = 'defaultValue') {
  return n + o + d;
}

console.log(foo(''));
