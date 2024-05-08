import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const Tabs = ({tabs, activeTabs, setActiveTabs}) => {
  return (
    <View style={styles.container}>
      <FlatList 
       data={tabs}
       renderItem={({item}) => (
        <TabButton />
       )}
      />
    </View>
  )
}

export default Tabs;