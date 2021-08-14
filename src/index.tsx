import { NativeModules } from 'react-native';

type WindowTintColorType = {
  multiply(a: number, b: number): Promise<number>;
};

const { WindowTintColor } = NativeModules;

export default WindowTintColor as WindowTintColorType;
