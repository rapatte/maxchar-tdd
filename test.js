const maxChar = require("./index")

test("function exists", () => {
    expect(typeof maxChar).toEqual("function");
})

test("finds the most frequently used char", () => {
    expect(maxChar("a")).toEqual("a");
    expect(maxChar("azlkhdslkfhdsqfaaaaaaaa")).toEqual("a")
})

test("works with number in the string", () => {
    expect(maxChar("a1b1c1d1e1")).toEqual("1");
})