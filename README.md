# react-native-window-tint-color

Stop shipping to production that default blue color in iOS apps when the user is interacting with your native views.

This module will use the [tintColor]((https://developer.apple.com/documentation/uikit/uiview/1622467-tintcolor)) property in iOS to globally change the color of the native views accent color to match your own style.

If you want to learn more why this module was created, check out [this article](https://raulriera.medium.com/remove-that-blue-color-from-your-react-native-applications-7964fd0e87a3?sk=3d2207113b8797122673be4dea2bb053) in my blog.

## Example

Setting the `tintColor` to `rgb(0,0,0)` will result in the accent color of your native views turning black and looking like this.

![Example image](/example.png)
> ✋ This module only supports iOS, calling the method in Android will reject the Promise.

## Installation

```sh
npm install react-native-window-tint-color
```

## Usage

```js
import WindowTintColor from "react-native-window-tint-color";
import { Platform } from 'react-native';

// Android platform doesn't appear to support theming without XML files
if (Platform.OS === 'ios') {
    await WindowTintColor.setTintColor(255, 0, 0);
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
