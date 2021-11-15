const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test ("returnTwo should return 2", () => {
    expect(returnTwo()).toBe(2)
})

describe("greeting function tests", () => {
    test("greeting with James as parameter", () => {
        expect(greeting('James')).toBe('Hello, James')
    })

    test("greeting with Jill as parameter", () => {
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
})

describe("add function tests", () => {
    test("add with 1 and 2", () => {
        expect(add(1,2)).toBe(3)
    })
    
    test("add with 5 and 9", () => {
        expect(add(5, 9)).toBe(14)
    })  
})

