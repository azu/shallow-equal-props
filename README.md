# shallow-equal-props [![Build Status](https://travis-ci.org/azu/shallow-equal-props.svg?branch=master)](https://travis-ci.org/azu/shallow-equal-props)

Shallow Equal for React's props.

It is a customize version of [shallow-equal-object](https://github.com/azu/shallow-equal-object "shallow-equal-object").

## Features

- Shallow equal for objects
    - It is based [shallow-equal-object](https://github.com/azu/shallow-equal-object "shallow-equal-object")
- Support `React.Element`
    - Check equality `React.Element` if `props` include `React.Element` like `children`,

## Install

Install with [npm](https://www.npmjs.com/):

    npm install shallow-equal-props

## Usage

Shallow equal for props.

```jsx
import { shallowEqualProps } from "shallow-equal-props";
import * as React from "react";
class MyComponent extends React.Component {
    shouldComponentUpdate(nextProps){
        return shallowEqualProps(this.props, nextProps);
    }
}
```

Support `React.Element`

```tsx
// equal to React.Element
// Check: key and type
const elementA = React.createElement("div", { key: "a" });
const elementB = React.createElement("div", { key: "a" });
assert.equal(shallowEqualProps({
    child: elementA
}, {
    child: elementB
}), true, "should be equal");
// Not equal: type
const elementA = React.createElement("div", { key: "a" });
const elementB = React.createElement("span", { key: "a" });
assert.equal(shallowEqualProps({
    child: elementA
}, {
    child: elementB
}), false, "element is not same type");
// Not equal: key
const elementA = React.createElement("div", { key: "a" });
const elementB = React.createElement("div", { key: "b" });
assert.equal(shallowEqualProps({
    child: elementA
}, {
    child: elementB
}), false, "elementA is not equal elementB");
```


## Changelog

See [Releases page](https://github.com/azu/shallow-equal-props/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/shallow-equal-props/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
