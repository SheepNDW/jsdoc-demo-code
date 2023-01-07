/**
 * Callback for adding two numbers.
 *
 * @callback addStuffCallback
 * @param {int} sum - An integer.
 */

/**
 * Add two numbers together, then pass the results to a callback function.
 *
 * @param {int} x - An integer.
 * @param {int} y - An integer.
 * @param {addStuffCallback} callback - A callback to run.
 */
function addStuff(x, y, callback) {
  callback(x + y);
}

addStuff(1, 2, (num) => console.log(num));
