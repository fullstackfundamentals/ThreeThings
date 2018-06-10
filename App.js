import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What good things happened today?</Text>
        <TextInput
          style={styles.input}
          ref="thing1"
          placeholder="Something"
          returnKeyType="next"
          onSubmitEditing={() => this.refs.thing2.focus()} />
        <TextInput
          style={styles.input}
          ref="thing2"
          placeholder="Something"
          returnKeyType="next"
          onSubmitEditing={() => this.refs.thing3.focus()} />
        <TextInput
          style={styles.input}
          ref="thing3"
          placeholder="Something"
          returnKeyType="next"
          onSubmitEditing={() => this.refs.thing4.focus()} />

        <Text style={styles.text}>What could have gone better?</Text>
        <TextInput
          style={styles.input}
          ref="thing4"
          placeholder="Something"
          returnKeyType="done"
          onSubmitEditing={this.onSave} />

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
