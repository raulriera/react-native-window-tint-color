import { NativeModules } from 'react-native';

type WindowTintColorType = {
  setTintColor(red: number, green: number, blue: number): Promise<number>;
};

const { WindowTintColor } = NativeModules;

export default WindowTintColor as WindowTintColorType;
