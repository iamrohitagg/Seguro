import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export default {
  size: {
    header: height > 700 ? 20 : 15,
    regular: height > 700 ? 16 : 13,
  },
  headerSize: height * 0.1,
};
