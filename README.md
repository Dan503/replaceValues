# replaceValues

A function for surgically replacing values in an object

`````
npm install replace-values --save
`````

This function is essentially the opposite of my [defaultTo](https://www.npmjs.com/package/default-to) function.

##JS Usage

This is how you would use it in a javascript file

###Single level

`````js
var replaceValues = require('replace-values');

var example = {
    one: 1,
    two : 2,
    three: 3
};

example = replaceValues(example, {
    two: 'two',
});

//example now equals { one: 1, two: 'two', three: 3}
`````

In this case `example` would now equal this:

`````js
{
    one: 1,
    two: 'two',
    three: 3
}
`````

###Nested

The function can also replace nested values

`````js
var replaceValues = require('replace-values');

var example = {
    one: 1,
    two : {
        a: 'aaa',
        b: 'bbb'
    },
    three: 3
};

example = replaceValues(example, {
    two: { a : 'zzz'},
});
`````

In this case `example` would now equal this:

`````js
{
    one: 1,
    two: {
        a: 'zzz',
        b: 'bbb'
    },
    three: 3
}
`````

##Pug and Jade usage

This npm package also comes with [Pug and Jade](https://pugjs.org/api/getting-started.html) versions of the function. To use the function in your pug/jade templates add this to the top of your base pug/jade file:

`````jade
include ../../node_modules/replace-values/replaceValues
`````

Make sure the path is correct, it will be different depending on your folder structure. It is a relative path from the file it is being included in. Also, note that there is no file extension in the example.

After including that line, you can use it in the same ways that I have used it above except you need to make sure you nest the js inside a js block (note the `-` at the top of the code block).

``````jade
-
    var example = {
        one: 1,
        two : 2,
        three: 3
    };

    var example = replaceValues(example, {
        two: 'two',
    })
``````

##Developers

If using any ES6 syntax, use the [babel-it](https://github.com/IonicaBizau/babel-it) npm plugin just before publishing to convert the js files into eES5 syntax for better environment support.