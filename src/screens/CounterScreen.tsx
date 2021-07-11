import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';


export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      {/* Button right  +1 */}
      <Fab
        title='+1'
        onPress={()=>setCounter(counter + 1 )}
        position='br' 
      />

      {/* Button left -1 */}

      <Fab
        title='-1'
        onPress={()=>setCounter(counter - 1 )}
        position='bl' 
      />



{/*       <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  }
 
});
