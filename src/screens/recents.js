import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import {Feather} from '@expo/vector-icons';
import ProgressiveImage from '../componets/utils/progressiveImage';
import { Video } from "expo-av";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Recents = ({ route, navigation }) => {
  return (

    <ScrollView
    style={{ backgroundColor: '#000' }}
    >
        <View style={styles.logoContainer}>
            <Text style={{color: '#FFF', fontSize: 24, fontWeight: 'bold'}}>
                Eu sou William Mendonça
            </Text>
        </View>


        <TouchableOpacity 
          style={{position: 'absolute', left: 0, top: 40, padding: 10, backgroundColor: '#000', borderRadius: 28, opacity: 0.80}} 
          onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' size={28} color='#fff' />
        </TouchableOpacity>


      <Video
            source={{
              uri:
                "https://vod-progressive.akamaized.net/exp=1602095231~acl=%2A%2F2018110027.mp4%2A~hmac=7fd11b291451ad6aa67e1e6af74fe5d0f65f7d8c839280712b52b4e9f756b995/vimeo-prod-skyfire-std-us/01/1434/18/457173624/2018110027.mp4?filename=2020-09-12+01-32-32.mp4"
            }}
            shouldPlay
            useNativeControls={true}
            resizeMode="contain"
            style={{ top: 0, width: screenWidth, height: screenHeight-100, marginTop: 10, marginBottom: 50, backgroundColor: '#000' }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginVertical: 10,
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'auto',
    marginTop: 50,
    marginLeft: 54
 },

});

export default Recents;