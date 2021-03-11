import {Platform} from 'react-native';

export const transparent = (opacity) => `rgba(0,0,0,0.${opacity})`

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const PReg =
  Platform.OS !== 'ios' ? 'Product Sans Regular' : 'Product Sans';
export const PBold =
  Platform.OS !== 'ios' ? 'Product Sans Bold' : 'Product Sans';
export const PMed =
  Platform.OS !== 'ios' ? 'Product Sans Medium 500' : 'Product Sans';
export const PThin =
  Platform.OS !== 'ios' ? 'Product Sans Thin 250' : 'Product Sans';
