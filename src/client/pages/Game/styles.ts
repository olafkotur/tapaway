import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  text: {
    color: theme.white,
    fontSize: 14
  },

  levelText: {
    color: theme.white,
    fontSize: 20
  },

  levelContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 20,
    bottom: 20
  },

  pointsContainer: {
    flexDirection: 'row',
  },

  bottomRightContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20
  },

  exitButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: theme.quaternary,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 5,
  },

  icon: {
    height: 14,
    width: 14
  }
});
