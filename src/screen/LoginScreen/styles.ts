import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: '25%',
  },
  input: {
    borderBottomWidth: 1,
    height: 48,
    fontSize: 16,
    marginVertical: 16,
  },
  button: {
    backgroundColor: 'black',
    height: 48,
    borderRadius: 12,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default styles;
