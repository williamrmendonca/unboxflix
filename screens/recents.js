import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, Dimensions } from 'react-native';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import ProgressiveImage from '../componets/utils/progressiveImage';
import { Video } from "expo-av";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;


{/* <iframe src="https://player.vimeo.com/video/408661554" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}


const Recents = ({ route, navigation }) => {
  // return (
  //   <View style={styles.container}>
  //     <Text>Esta é a Recents</Text>
  //   </View>
  // );https://4f9a4245b4689d5a.cdn.gocache.net/events/436f9c6a-4021-488f-ac7e-0e4676dc238d_banner.png
  return (

    <ScrollView
    style={{ backgroundColor: '#000' }}
    >
        <View style={styles.logoContainer}>
            <Text style={{color: '#FFF', fontSize: 24, fontWeight: 'bold'}}>
                Vip
            </Text>
            <Text style={{color: '#5C9BF9', fontSize: 24, fontWeight: 'bold'}}>
                Fã
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginLeft: 20, marginBottom: 8}}>
              <Text style={{color: 'red', fontSize: 24, fontWeight: 'bold'}}>Live</Text>
              <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>: Thiago Brava</Text>
            </View>

        </View>


        <TouchableOpacity 
          style={{position: 'absolute', left: 0, top: 40, padding: 10, backgroundColor: '#000', borderRadius: 28, opacity: 0.80}} 
          onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' size={28} color='#fff' />
        </TouchableOpacity>


      <Video
            source={{
              uri:
                "https://player.vimeo.com/external/419693201.hd.mp4?s=2be5c4a4c1817c8f68f735d8ce19a54b1886933e&profile_id=175"
            }}
            shouldPlay
            useNativeControls={true}
            resizeMode="contain"
            style={{ top: 0, width: screenWidth, height: 200, marginTop: 10, marginBottom: 50, backgroundColor: '#000' }}
      ></Video>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginLeft: 10, marginBottom: 16}}>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Outros eventos</Text>
      </View>

      <ScrollView style={{backgroundColor: '#000', marginLeft: 10, marginRight: 10}}>

          <ImageBackground
            source={{uri: 'https://artinvox.com.br/wp-content/uploads/2020/03/banner-thiago-brava-logo-1350x600.jpg'}}
            style={styles.imageTitle1}
            imageStyle={{ borderRadius: 10 }}
          />
          <ImageBackground
            source={{uri: 'https://4f9a4245b4689d5a.cdn.gocache.net/events/436f9c6a-4021-488f-ac7e-0e4676dc238d_banner.png'}}
            style={styles.imageTitle2}
            imageStyle={{ borderRadius: 10 }}
          />
          <ImageBackground
            source={{uri: 'https://minhaentrada.com.br/imagens/passaporte/bannerfull_pass_1237.jpeg'}}
            style={styles.imageTitle4}
            imageStyle={{ borderRadius: 10 }}
          />
          <ImageBackground
            source={{uri: 'https://minhaentrada.com.br/gestao/fotos/14811_banner4.jpg'}}
            style={styles.imageTitle3}
            imageStyle={{ borderRadius: 10 }}
          />

      </ScrollView>
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

  imageTitle1: {
    top: 0,
    height: 170,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  imageTitle2: {
    height: 190,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,

  },
  imageTitle3: {
    height: 190,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,

  },
  imageTitle4: {
    height: 90,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,

  },
});

export default Recents;