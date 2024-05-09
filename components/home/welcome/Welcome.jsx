import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'
import { useRouter } from 'expo-router'

const jobTypes = ['Full-Time', 'Part-Time', 'Contractor']

const Welcome = ({ searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter()
  const [activeJobTypes, setActiveJobTypes] = useState('Full-Time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Agafina</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={ handleClick}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobTypes, item)}
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}`)
              }}
      
            >
                <Text style={styles.tabText(activeJobTypes, item)}>{ item }</Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{columnGap:SIZES.small}}
        />
      </View>

    </View>
  )
}

export default Welcome