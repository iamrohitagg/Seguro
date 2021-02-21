import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../Themes/Fonts';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  chatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  middleContainer: {
    justifyContent: 'space-around',
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
  },
  lastMessage: {
    bottom: 0,
    color: 'rgb(128,128,128)',
    fontSize: Fonts.size.regular,
  },
  date: {
    fontSize: Fonts.size.regular,
    color: 'rgb(128,128,128)',
  },
});

export default styles;
