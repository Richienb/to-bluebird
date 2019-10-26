import test from "ava"
import toBluebird from "."
import isPromise from "p-is-promise"

test("main", (t) => {
    const es6Promise = new Promise((resolve) => resolve("Hello World!")) // Regular native promise.
    t.true(isPromise(es6Promise))

    const bluebirdPromise = toBluebird(es6Promise) // Bluebird promise.
    t.true(isPromise(bluebirdPromise))
})
