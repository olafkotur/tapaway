import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  gameInfoContainer: {
    marginTop: height * 0.35
  },

  startButton: {
    width: width * 0.7,
    backgroundColor: theme.tertiary,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 50
  },

  startText: {
    fontSize: 20,
    color: theme.white
  },
});
