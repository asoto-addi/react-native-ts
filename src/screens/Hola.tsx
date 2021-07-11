import React from 'react'
import { View, Text } from 'react-native'

export const Hola = () => {
    return (
        <View
        style={{
          flex: 1,
          backgroundColor: 'gray',
          justifyContent: 'center',
        }}>
         
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign:'center',
              fontSize: 45,
            }}>
            Hola Amaury
          </Text>
        </View>
      );
}

