import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemWrapper: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
  albumLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  flatList: {
    paddingBottom: 48,
  },
});

export default styles;
