function test(title, callback) {
    try {
      callback()
      console.log(`SUCCESS: ${title}`)
    } catch (error) {
      console.error(`FAILURE: ${title}`)
      console.error(error)
    }
  }
  
  function expect(actual) {
    return {
        toBe: (expected) => { if (expected !== actual) throw new Error(`${actual} is not equal to ${expected}`) },
        toEqual: (expected) => { if (JSON.stringify(expected) == JSON.stringify(actual)) throw new Error(`${actual} is not exactly equal to ${expected}`) },
        toBeGreaterThan: (expected) => { if (expected  >= actual) throw new Error(`${actual} is not greater than ${expected}`) },
        toBeLessThan: (expected) => { if (expected <= actual) throw new Error(`${actual} is not less than ${expected}`) },
    }
  }

  global.test = test
  global.expect = expect