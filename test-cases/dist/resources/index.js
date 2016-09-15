module.exports = {
    "component-function.css": {
        "name": "component-function.css",
        "body": ":host { display: 'flex' }"
    },
    "component-function": {
        "name": "component-function",
        "body": require('./component-function/component-function.js').default || require('./component-function/component-function.js'),
        "headers": {
            "needs": "[css]"
        }
    },
    "component-object": require('./component-object/component-object.js').default || require('./component-object/component-object.js'),
    "foo": require('./data/foo.js').default || require('./data/foo.js')
}