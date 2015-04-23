var template = require('marko').load(require.resolve('./template.marko'));

exports.renderer = function(input, out) {
    var foo = input.foo;
    var renderBody = input.renderBody;

    template.render({
            // Pass along the function that can be used to render the content
            // nested in the body of the custom tag.
            renderBody: renderBody,

            // Provide a data provider to asynchronously load the data that will
            // be provided to the user provided variable.
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