/**
 * @typedef {Object} Role - 角色型別
 * @property {string} name - 名字
 * @property {number} age - 年齡
 * @property {number} [phone] - 電話
 * @prop {string} [job="f2e"] - 工作
 */
/** @type {Role} */
let someone;

someone.age;

/**
 *
 * @param {string} name name
 * @param {number} age age
 * @param {number} phone phone
 * @param {string} job job
 * @returns {Role}
 */
function createRole(name, age, phone, job = 'f2e') {
  return {
    name,
    age,
    phone,
    job,
  };
}

const sheep = createRole('sheep', 100, 0900000000);
sheep.name;

/**
 * A song
 * @typedef {Object} Song
 * @property {string} title - The title
 * @property {string} artist - The artist
 * @property {number} year - The year
 */

/**
 * Play a song
 * @param {Song} song - The song to be played
 */
function play(song) {
  song.year;
}
