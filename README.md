# react-native-window-tint-color

Stop shipping to production that default blue color in iOS apps when the user is interacting with your native views.

This module will use the [tintColor]((https://developer.apple.com/documentation/uikit/uiview/1622467-tintcolor)) property in iOS to globally change the color of the native views accent color to match your own style.

## Example

Setting the `tintColor` to `rgb(0,0,0)` will result in your native views to display like this.

![Example image](/example.png)

## Installation

```sh
npm install react-native-window-tint-color
```

## Usage

```js
import WindowTintColor from "react-native-window-tint-color";

// ...

const result = await WindowTintColor.setTintColor(255, 0, 0);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
