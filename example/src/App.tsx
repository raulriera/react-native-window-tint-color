import * as React from 'react';

import { StyleSheet, View, TextInput } from 'react-native';
import WindowTintColor from 'react-native-window-tint-color';

export default function App() {
  const [red, setRed] = React.useState<number>(0);
  const [green, setGreen] = React.useState<number>(0);
  const [blue, setBlue] = React.useState<number>(255);
  const [setResult] = React.useState<any>();

  React.useEffect(() => {
    WindowTintColor.setTintColor(red, green, blue).then(setResult);
  }, [red, green, blue, setResult]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setRed(parseFloat(text))}
        defaultValue={String(red)}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setGreen(parseFloat(text))}
        defaultValue={String(green)}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setBlue(parseFloat(text))}
        defaultValue={String(blue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 60,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
