import React from 'react'
import { View, Text, ActivityIndicator,TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants'
import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import useFetch from '../../../hooks/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Popularjobs = () => {
  const router = useRouter()

  const { data, isLoading, error} = useFetch(
    'search', {
      query:'Backend Developer',
      num_pages:1
    }
  )
  console.log(data)
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
          data?.map((job) => {
           return (
            <NearbyJobCard
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
           )
          })
        )}
      </View>
    </View>
  )
}

export default Popularjobs