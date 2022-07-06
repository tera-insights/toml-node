var parser = require('./lib/parser');
var compiler = require('./lib/compiler');

module.exports = {
  parse: function(input, map) {
    var nodes = parser.parse(input.toString());
    return compiler.compile(nodes, map);
  }
};
