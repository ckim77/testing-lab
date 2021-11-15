const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
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

    test("greeting output should be string", () => {
        expect(typeof greeting("Jill")).toBe('string')
    })
})

describe("Math functions", () => {
    test("add with 1 and 2", () => {
        expect(add(1,2)).toBe(3)
    })
    
    test("add with 5 and 9", () => {
        expect(add(5, 9)).toBe(14)
    })  

    test("multiply with 5 and 9", () => {
        expect(multiply(5, 9)).toBe(45)
    })  

    test("multiply with 5 and 9", () => {
        expect(typeof multiply(5, 9)).not.toBe("boolean")
    })  
    
    test("divide with 30 and 6", () => {
        expect(divide(30, 6)).toBe(5)
    })  

    test("subtract with 8 and 1", () => {
        expect(subtract(8, 1)).toBe(7)
    })  

    test("subtract with 8 and 1", () => {
        expect(subtract(8, 1)).not.toContain('asdf')
    })  

})

