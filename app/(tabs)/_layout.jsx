import { View, Text } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <>
        <Tabs.Screen
          name="home"
        />
        <Tabs.Screen
          name="profile"
        />
    </>
  )
}

export default _layout