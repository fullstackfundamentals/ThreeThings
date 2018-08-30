import { StyleSheet } from 'react-native';

const fontFamily = 'Avenir Next';

export default StyleSheet.create({
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
  },
  dayHeading: {
    marginBottom: 100
  },
  dayHeadingDay: {
    fontFamily,
    fontSize: 32,
    fontWeight: '100',
    letterSpacing: 2,
    textAlign: 'center'
  },
  dayHeadingDate: {
    fontFamily,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
