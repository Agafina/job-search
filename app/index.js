import { View, Text, ScrollView} from 'react-native'
import { COLORS , icons ,images, SIZES} from '../constants'
import {Stack, useRouter} from 'expo-router'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
const Home = () => {

    const router  = useRouter()
    const[searchTerm , setSearchTerm] = useState(" ")
    return ( 
        <SafeAreaView style={{backgroundColor:COLORS.lightWhite, flex:1}}>
            <Stack.Screen
              options={{
                headerStyle: {backgroundColor:COLORS.lightWhite, justifyContent:'space-between'},
                headerShadowVisible:false,
                headerTitle: " ",
                headerLeft: () => ( 
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => ( 
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                )

              }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flex:1, padding:SIZES.medium}}>
                <Welcome 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                  if(searchTerm){
                    router.push(`/search/${searchTerm}`)
                  }
                }}
                />
                <Popularjobs />
                <Nearbyjobs />
              </View>
            </ScrollView>
        </SafeAreaView>
     );
}
 
export default Home;