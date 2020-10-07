import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, Dimensions, Linking } from 'react-native';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import ProgressiveImage from '../componets/utils/progressiveImage';
import dataSectionMyList from '../data/sectionMyList'

const showDetail = ({ route, navigation }) => {
  const { dados } = route.params;
  const {width, height} = Dimensions.get('window');
  const [myList, setMyList] = useState(dataSectionMyList)
  return (
    <ScrollView style={{backgroundColor: '#000'}}>
    <View>
      <ImageBackground
        source={{uri: dados.bg}}
        style={styles.ImageBg}
        blurRadius={2}
      >
          <ImageBackground
            source={{uri: dados.uri}}
            style={styles.imageTitle}
            imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderRadius: 30 }}
          >
            <TouchableOpacity 
              style={{position: 'absolute', left: 10, top: 10, padding: 10, backgroundColor: '#000', borderRadius: 28, opacity: 0.80}} 
              onPress={() => navigation.goBack()}>
              <Feather name='arrow-left' size={28} color='#fff' />
            </TouchableOpacity>
            <Text style={{position: 'absolute', top: 15, left: '60%', paddingLeft: 16, paddingRight: 16,backgroundColor: 'red', color: '#fff', opacity: 0.7,fontSize: 18, fontWeight: 'bold', borderRadius: 10}}>Lançamento</Text>
          </ImageBackground>

          <View style={styles.movieInfoContainer}>
              <View style={{justifyContent: 'center'}}>
              </View>
              <TouchableOpacity style={styles.palyIconContainer} onPress={() => navigation.navigate('Recents')}>
              <FontAwesome5 name='play' size={22} color='red' style={{paddingRight:10}} /><Text style={styles.movieInfoName}> {dados.name} </Text>
              </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal: 14, marginTop: 16, marginBottom: 8 }}>
              <Text style={{color: '#fff', opacity: 1, lineHeight: 20, fontSize: 16, fontWeight: 'bold' }}>
                  {dados.name}   |   {dados.stat.substr(0, 4)}   |   Avaliaçao: {dados.vote}
              </Text>
          </View>

          <View style={{paddingHorizontal: 14, marginTop: 8, marginBottom: 60 }}>
              <Text style={{color: '#fff', opacity: 1, lineHeight: 20, fontSize: 16, fontWeight: 'bold' }}>
                  {dados.desc}
              </Text>
          </View>


      </ImageBackground>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10
  },
  imageTitle: {
    top: 40,
    height: (Dimensions.get('window').width * 1.4) - 20,
    width: Dimensions.get('window').width - 20,
    justifyContent: 'flex-end',
  },
  palyIconContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#01ADB9',
    padding: 12,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'rgba(92,155,249,0.2)',
    marginTop: 50,
    
  },
  movieInfoName: {
    padding: 8,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth: 250
},




});

export default showDetail;