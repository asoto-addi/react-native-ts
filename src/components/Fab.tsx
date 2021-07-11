import React, {Children} from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {


  const ios = () => {
    return (
      <TouchableOpacity
        style={position === 'bl' ? styles.fabLocationBR : styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={position === 'bl' ? styles.fabLocationBR : styles.fabLocationBL}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  /* return depend to OS, use Platform */

  return Platform.OS === 'ios' ? ios() : android();

};

const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: 15,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    left: 15,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
});
