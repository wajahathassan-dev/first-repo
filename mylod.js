const lodash = require('lodash');

let output = lodash.flattenDeep([1, [2, [[30, 40]]]])
console.log(output)