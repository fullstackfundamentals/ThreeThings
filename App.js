import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Button, AsyncStorage } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thing1: '',
      thing2: '',
      thing3: '',
      thing4: '',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.text}>What good things happened today?</Text>
        <TextInput
          style={styles.input}
          ref="thing1"
          placeholder="Something"
          returnKeyType="next"
          onChangeText={thing1 => this.setState({ thing1 })}
          onSubmitEditing={() => this.refs.thing2.focus()} />
        <TextInput
          style={styles.input}
          ref="thing2"
          placeholder="Something"
          returnKeyType="next"
          onChangeText={thing2 => this.setState({ thing2 })}
          onSubmitEditing={() => this.refs.thing3.focus()} />
        <TextInput
          style={styles.input}
          ref="thing3"
          placeholder="Something"
          returnKeyType="next"
          onChangeText={thing3 => this.setState({ thing3 })}
          onSubmitEditing={() => this.refs.thing4.focus()} />

        <Text style={styles.text}>What could have gone better?</Text>
        <TextInput
          style={styles.input}
          ref="thing4"
          placeholder="Something"
          returnKeyType="done"
          onChangeText={thing4 => this.setState({ thing4 })}
          onSubmitEditing={() => this.onSave()} />

        <Button
          onPress={() => this.onSave()}
          title="Save Update"
          accessibilityLabel="Save today's update"
        />
      </KeyboardAvoidingView>
    );
  }

  async onSave() {
    console.log('On Save fired');

    const data = this.state;

    try {
      await AsyncStorage.setItem(getDateKey(), JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  }
}

function getDateKey() {
  return '20180720';
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
