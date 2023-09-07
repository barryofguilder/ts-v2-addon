/**
 * Creates a CSS selector using the `data-test-id` of the elements.
 *
 * @function testId
 * @param {String[]} ids The array or selector ids.
 * @return {String} A single CSS selector.
 */
function testId(...ids) {
  return ids.map(arg => {
    if (arg[0] === '.') {
      return arg;
    }
    return `[data-test-id="${arg}"]`;
  }).join(' ');
}

export { testId };
//# sourceMappingURL=test-selectors.js.map
