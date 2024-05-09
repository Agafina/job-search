import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'
const TabButton = ({name, activeTabs, onHandleSearchType}) => {
  return (
        <TouchableOpacity 
      style={styles.btn(name, activeTabs)}
      onPress={onHandleSearchType}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
  )
}
const Tabs = ({tabs, activeTabs, setActiveTabs}) => {
  return (
    <View style={styles.container}>
      <FlatList 
       data={tabs}
       renderItem={({item}) => (
        <TabButton
          activeTabs={activeTabs}
          name={item}
          onHandleSearchType ={() => setActiveTabs(item)}
        />
       )}
       horizontal
       showsHorizontalScrollIndicator={false}
       keyExtractor={item => item}
       contentContainerStyle={{ columnGap: SIZES.small /2}}
      />
    </View>
  )
}

export default Tabs;