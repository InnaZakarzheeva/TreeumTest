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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackLabel: {
    width: '80%',
    fontSize: 16,
    fontWeight: '500',
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 8,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailsText: {
    color: 'white',
    fontSize: 14,
  },
  flatList: {
    paddingBottom: 48,
  },
  emptyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
});

export default styles;
