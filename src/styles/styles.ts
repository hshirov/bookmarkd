import { PressableStateCallbackType } from 'react-native';

const styles = {
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  pressedOpacity: (state: PressableStateCallbackType) => ({ opacity: state.pressed ? 0.5 : 1 }),
};

export default styles;
