var template = require('marko').load(require.resolve('./template.marko'));
template.render({}, process.stdout);