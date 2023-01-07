/**
 * @param {import('./types').Pet} p
 */
function walk(p) {
  console.log(`Walking ${p.name}...`);
}

/**
 * @returns {import('./types').Role} Role
 */
const generateRole = () => {
  return {
    id: crypto.randomUUID(),
    name: 'sheep',
    age: 100,
  };
};

const role = generateRole();
