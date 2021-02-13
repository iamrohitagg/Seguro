import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export default {
  size: {
    header: height > 700 ? 20 : 15,
    regular: height > 700 ? 14 : 10,
  },
  headerSize: height * 0.1,
};
