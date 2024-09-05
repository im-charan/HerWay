import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot} from 'expo-router'

const RootLayout = () => {
  return (
    <>
        <Text>header</Text>
        <Slot/>
        <Text>footer</Text>
    </>
  )
}

export default RootLayout

