import React from 'react'
import { View, Text, ActivityIndicator,TouchableOpacity,FlatList } from 'react-native'
import { COLORS,SIZES } from '../../../constants'
import styles from './popularjobs.style'
import { useState } from 'react'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../'

const Popularjobs = () => {
  const router = useRouter()
  const isLoading = false
  const error = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={25} color={COLORS.primary}/>
        ): error ? (
          <Text>Something went wrong</Text>
        ): (
          <FlatList 
          
           data={[1,2,3,4]}
           renderItem={({ item }) => (
            <PopularJobCard item={item}/>
          )}
           keyExtractor={item => item?.job_id}
           contentContainerStyle={{columnGap: SIZES.medium}}
           horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs