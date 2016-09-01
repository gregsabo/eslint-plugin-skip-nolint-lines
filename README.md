# eslint-plugin-skip-nolint-lines

Suppress eslint messages from lines which contain nolint comments.

Example:

```
if (foo == 'bar') { // nolint

}
```

This is useful in codebases which already have `nolint` declarations
sprinkled throughout from use of jslint. Otherwise, it is recommended to
use the builtin `eslint-disable` declaration instead.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-skip-nolint-lines`:

```
$ npm install eslint-plugin-skip-nolint-lines --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-skip-nolint-lines` globally.

## Usage

Add `skip-nolint-lines` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "skip-nolint-lines"
    ]
}
```
