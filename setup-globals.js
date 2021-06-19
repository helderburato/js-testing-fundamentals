// How to execute node --require ./setup-globals lessons/<>.js

async function test(title, callback) {
  try {
    await callback()
    console.log(`✔ ${title}`);
  } catch (e) {
    console.error(`x ${title}`);
    console.error(e);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

global.test = test
global.expect = expect
