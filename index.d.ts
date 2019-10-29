import BBPromise from "bluebird"

/**
 * Convert any type of promise to a Bluebird promise
 * @param promise The promise to convert.
 * @example
 * ```
 * const toBluebird = require("to-bluebird");
 *
 * const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
 * const bluebirdPromise = toBluebird(es6Promise); // Bluebird promise.
 * ```
*/
declare function toBluebird<T>(promise: PromiseLike<T>): BBPromise<T>;

export = toBluebird;
