const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array with the same length as the input array',()=>{
        const testArray = [1, 2, 3, 4, 5];
        const results = shuffleArray(testArray);
        expect(results).toHaveLength(testArray.length)
    }),
    test('all items have been shuffled around',()=>{
        const testArray2 = [1, 2, 3, 4, 5];
        const result2 = shuffleArray(testArray2);
        expect(testArray2).not.toEqual(result2)

    })
    // test('',()=>{

    // })
})