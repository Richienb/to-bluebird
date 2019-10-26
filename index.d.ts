import BBPromise from "bluebird"

/**
 * My awesome module.
 * @param promise The promise to convert.
 * @example
 * ```
 * const toBluebird = require("to-bluebird");
 *
 * const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
 * const bluebirdPromise = toBluebird(es6Promise); // Bluebird promise.
 * ```
*/
declare function toBluebird(promise: PromiseLike): BBPromise;

export = toBluebird;
