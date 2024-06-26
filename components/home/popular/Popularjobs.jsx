import React from 'react'
import { View, Text, ActivityIndicator,TouchableOpacity,FlatList } from 'react-native'
import { COLORS,SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react'

const Popularjobs = () => {
  const router = useRouter()

  const { data, isLoading, error} = useFetch(
    'search', {
      query:'React Developer',
      num_pages:1
    }
  )
  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id)
  }
 
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
           data={data}
           renderItem={({ item }) => (
            <PopularJobCard item={item}
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
            />
          )}
           keyExtractor={item => item?.job_id}
           contentContainerStyle={{ columnGap: SIZES.medium }}
           horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs