import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What good things happened today?</Text>
        <TextInput style={styles.input} placeholder="Something" />
        <TextInput style={styles.input} placeholder="Something" />
        <TextInput style={styles.input} placeholder="Something" />

        <Text style={styles.text}>What could have gone better?</Text>
        <TextInput style={styles.input} placeholder="Something" />

        <Button
          onPress={this.onSave}
          title="Save Update"
          accessibilityLabel="Save today's update"
        />
      </View>
    );
  }

  onSave() {
    console.log('On Save fired');
  }
}

const fontFamily = 'Avenir Next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFDCE1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  text: {
    fontFamily,
    marginBottom: 16
  },
  input: {
    fontFamily,
    padding: 12,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 16
  }
});
