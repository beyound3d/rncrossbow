import {useState} from 'react';
import {view, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons,images, SIZES} from '../constant';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

import { View, Text} from 'react-native'

const Home = () => {
  const router = useRouter();
  return (
   <SafeAreaView style = {{flex:1, backgroundColor:COLORS.lightWhite}}>
    <Stack.Screen
    options={{
      headerStyle:{backgroundColor:COLORS.lightWhite},
      headerShadowVisible:false,
      headerleft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
      ),
      headerTitle:""
    }}
    />

<ScrollView showsVerticalScrollIndicator={false}>
  <View
  style={{
    flex:1,
    padding:SIZES.medium
  }}
  >
    <Welcome
    />
    <Popularjobs/>
    <Nearbyjobs/>
  </View>
</ScrollView>

   </SafeAreaView>
  )
}

export default Home