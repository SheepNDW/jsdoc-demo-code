/**
 * 取得一個指定範圍內 (min, max) 的隨機整數
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 隨機整數
 *
 * @example
 *
 *    // 1 - 10 中取隨機整數
 *    getRandomNumber(1, 10)
 */
export const getRandomInt = (min, max) => {
  return ~~(Math.random() * (max - min + 1)) + min;
};
