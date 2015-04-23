var template = require('marko').load(require.resolve('./template.marko'));

exports.renderer = function(input, out) {
    var foo = input.foo;
    var renderBody = input.renderBody;

    template.render({
            renderBody: renderBody,

            myDataProvider: function(callback) {
                setTimeout(function() {
                    callback(null, {
                        name: foo.toUpperCase()
                    });
                }, 100);
            }
        },
        out);
};