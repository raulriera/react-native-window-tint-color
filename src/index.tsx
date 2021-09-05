import { NativeModules } from 'react-native';

type WindowTintColorType = {
  /**
   * Sets the main window into color using the specified RGB color component values.
   * @param red  The value of the red component, from 0 to 255.
   * @param green  The value of the green component, from 0 to 255.
   * @param blue  The value of the blue component, from 0 to 255.
   * @returns Color generated in the native codebase.
   */
  setTintColor(red: number, green: number, blue: number): Promise<number>;
};

const { WindowTintColor } = NativeModules;

export default WindowTintColor as WindowTintColorType;
