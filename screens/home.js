import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import ProgressiveImage from '../componets/utils/progressiveImage';

import dataSection01 from '../data/section01'
import dataSectionMyList from '../data/sectionMyList'
import dataSectionArtistsList from '../data/sectionArtistsList'
import dataSectionRecommendedList from '../data/sectionRecommendedList'
import dataSectionAddList from '../data/sectionAddList'


export default function Home({ navigation }) {


    const [gallery, setGallery] = useState(dataSection01);

    const [backgroundData, setBackgroundData] = useState({
        uri: gallery[0].image,
        name: gallery[0].title,
        stat: gallery[0].released,
        desc: gallery[0].desc
    });

    const [myList, setMyList] = useState(dataSectionMyList)

    const [artistsList, setArtistsList] = useState(dataSectionArtistsList)

    const [recommendedList, setRecommendedList] = useState(dataSectionRecommendedList)

    const [addList, setAddList] = useState(dataSectionAddList)




    const carouselRef = useRef(null);

    const {width, height} = Dimensions.get('window');

    const _renderItem = ({item, index}) => {
        return(
            <View>
                <TouchableOpacity>
                    <ProgressiveImage source={{uri: item.image}} style={styles.carouselImage}>
                    </ProgressiveImage>
                        <Text style={{position: 'absolute', top: 5, left: '75%', padding: 2, paddingLeft: 8, paddingRight: 8,backgroundColor: 'red', color: '#fff', opacity: 0.7,fontSize: 12, fontWeight: 'bold', borderRadius: 10}}>LIVE</Text>
                    {/* <Text style={styles.carouselText} >{item.title}</Text>
                    <MaterialIcons name='library-add' size={30} color='#fff' style={styles.carouselIcon} /> */}

                </TouchableOpacity>
            </View>
        )
    }

  return (
      <ScrollView style={{backgroundColor: '#000'}}>
          <View style={styles.caroselContentContainer}>
              <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                <ImageBackground
                    source={{uri: backgroundData.uri}}
                    style={styles.ImageBg}
                    blurRadius={30}
                >
                    <View style={styles.logoContainer}>
                        <Text style={{color: '#FFF', fontSize: 24, fontWeight: 'bold'}}>
                            Vip
                        </Text>
                        <Text style={{color: '#5C9BF9', fontSize: 24, fontWeight: 'bold'}}>
                            Fã
                        </Text>
                    </View>
                    <View style={styles.searchBoxContainer}>
                        <TextInput
                            placeholder='Procurar show'
                            placeholderTextColor='#666'
                            style={styles.searchBox}
                        />
                        <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                    </View>
                    <View>
                    <View style={styles.titleContainer}>
                        <Text style={{color: '#FFF', fontSize: 24, fontWeight: 'bold', marginRight: 10}}>Top</Text>
                        <Text style={{color: 'red', fontSize: 24, fontWeight: 'bold', marginRight: 10}}>Lives</Text>
                        <Text style={{color: '#FFF', fontSize: 24, fontWeight: 'bold'}}>da semana</Text>
                    </View>

                        {/* <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginVertical: 10}}>Top </Text>
                        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginVertical: 10}}>Lives</Text>
                        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginVertical: 10}}> da Semana</Text> */}
                    </View>
                    <View style={styles.caroselContentContainerView}>
                        <Carousel 
                            style={styles.carousel}
                            ref={carouselRef}
                            data={gallery}
                            renderItem={_renderItem}
                            sliderWidth={width}
                            itemWidth={240}
                            inActiveOpacity={0.5}

                            containerWidth={ width - 30 }
                            separatorWidth={-15}
                            
                            onSnapToItem={(index) => {
                                console.log(index);
                                // carouselRef.current.scrollToIndex(index);
                                setBackgroundData({
                                    uri: gallery[index].image,
                                    name: gallery[index].title,
                                    stat: gallery[index].released,
                                    desc: gallery[index].desc
                                });
                            }}
            
                        />
                    </View>

                    <View style={styles.movieInfoContainer}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={styles.movieInfoName}>{backgroundData.name}</Text>
                            <Text style={styles.movieInfoStat}>{backgroundData.stat}</Text>
                        </View>
                        <TouchableOpacity style={styles.palyIconContainer} onPress={() => navigation.navigate('showDetail', {dados: backgroundData})}>
                            <FontAwesome5 name='play' size={22} color='#5C9BF9' style={{marginLeft: 4}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal: 14, marginTop: 0}}>
                        <Text style={{color: '#fff', opacity: 0.4, lineHeight: 20}}>
                            {backgroundData.desc}
                        </Text>
                    </View>

                </ImageBackground>
              </View>
          </View>

          <View style={{marginHorizontal: 14}}>
              <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 8, marginTop: 16}}>
                  Continue Assistindo
              </Text>
              <ImageBackground
              source={{uri: 'https://lh5.googleusercontent.com/proxy/NfEd-M448DZvmgAcMC7EQ9WLn-W9GI15l5PhE2b72u9UiGXwww3NtFocJZCOCh2xSODkUyq44j2ldTefH4n3iKGoGv1LKPj6jjqUfFsuSJEpK2VppQKPbb5sp8JVZSp3TsT29_2ZUrbbQKrdSnkA2mP0Bv_lvTU6'}}
              style={{height: width-20, width: '100%', backgroundColor: '#000'}}
              resizeMode='stretch'
              >
                <Text style={{color: '#fff', padding: 14}}>
                    Thiago Brava
                </Text>
                <View style={{position: 'absolute', top: width-35,height: 15, width: '100%', backgroundColor: '#000', opacity: 0.5}} />
                <LinearGradient
                colors={['#5C9BF9', '#2252C7']}
                start={[0.2,0.2]}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: width-35,
                    height: 15,
                    width: '75%',
                    opacity: 1, 
                    borderRadius: 7
                }}
                />
                <TouchableOpacity 
                style={{...styles.palyIconContainer, position: 'absolute', top: '40%', right: '40%'}}
                onPress={() => navigation.navigate('Recents')}
                >
                    <FontAwesome5 name='play' size={22} color='#5C9BF9' style={{marginLeft: 4}} />
                </TouchableOpacity>
              </ImageBackground>



              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24, marginBottom: 8}}>
                  <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Minha Lista</Text>
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: 'normal', opacity: 0.5}}>Ver Todos</Text>
              </View>
              <FlatList
              style={{marginBottom: 30}}
              data={myList}
              horizontal={true}
              decelerationRate="fast"
              renderItem={({item}) => {
                  return(
                      <TouchableOpacity style={{marginRight: 16}}>
                          <Image source={{uri: item.image}} style={{height: 200, width: 200, borderRadius: 10}} />
                          <View style={{position: 'absolute', height: 7, width: '100%', backgroundColor: '#5C9BF9', opacity: 1}} />
                          <FontAwesome5 name='play' size={38} color='#5C9BF9' style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />

                      </TouchableOpacity>
                  )
              }}
              />

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24, marginBottom: 8}}>
                  <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Artistas</Text>
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: 'normal', opacity: 0.5}}>Ver Todos</Text>
              </View>
              <FlatList
              style={{marginBottom: 30}}
              data={artistsList}
              horizontal={true}
              renderItem={({item}) => {
                  return(
                      <TouchableOpacity style={{marginRight: 16}}>
                          <Image source={{uri: item.image}} style={{height: 200, width: 200, borderRadius: 10}} />
                          <View style={{position: 'absolute', height: 7, width: '100%', backgroundColor: '#5C9BF9', opacity: 1}} />
                          {/* <FontAwesome5 name='play' size={38} color='#5C9BF9' style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} /> */}
                  <Text style={{color: '#5C9BF9', fontSize: 16, fontWeight: 'bold', position: 'absolute', top: '88%', left: 0, height: 32, width: '100%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', opacity: 0.9 }}>{item.name}</Text>
                          </TouchableOpacity>
                  )
              }}
              />


              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24, marginBottom: 8}}>
                  <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Recomendados</Text>
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: 'normal', opacity: 0.5}}>Ver Todos</Text>
              </View>
              <FlatList
              style={{marginBottom: 30}}
              data={recommendedList}
              horizontal={true}
              renderItem={({item}) => {
                  return(
                      <TouchableOpacity style={{marginRight: 16}}>
                          <Image source={{uri: item.image}} style={{height: 200, width: 200}} />
                          <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#5C9BF9', opacity: 0.8}} />
                          <FontAwesome5 name='play' size={38} color='#5C9BF9' style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />

                      </TouchableOpacity>
                  )
              }}
              />

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24, marginBottom: 8}}>
                  <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Adicionados Recentemente</Text>
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: 'normal', opacity: 0.5}}>Ver Todos</Text>
              </View>
              <FlatList
              style={{marginBottom: 30}}
              data={myList}
              horizontal={true}
              renderItem={({item}) => {
                  return(
                      <TouchableOpacity style={{marginRight: 16}}>
                          <Image source={{uri: item.image}} style={{height: 200, width: 200}} />
                          <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#5C9BF9', opacity: 0.8}} />
                          <FontAwesome5 name='play' size={38} color='#5C9BF9' style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />

                      </TouchableOpacity>
                  )
              }}
              />


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
    
  },
  caroselContentContainer: {
      flex: 1,
      backgroundColor: '#000',
      height: 720,
      paddingHorizontal: 14,
      
  },
  ImageBg: {
      flex: 1,
      height: null,
      width: null,
      opacity: 1,
      justifyContent: 'flex-start'
  },
  logoContainer: {
    marginVertical: 10,
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'auto',
    marginTop: 50,
    marginLeft: 14
 },

  searchBoxContainer: {
      backgroundColor: '#fff',
      elevation: 10,
      borderRadius: 4,
      //top: 40,
      marginVertical: 10,
      width: '92%',
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 8,
  },
  searchBox: {
      padding: 12,
      paddingLeft: 20,
      fontSize: 16
  },
  searchBoxIcon: {
      position: 'absolute',
      right: 20,
      top: 10
  },
  titleContainer: {
    marginVertical: 10,
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'auto',
    marginTop: 10,
    marginLeft: 14
 },

  caroselContentContainerView: {
      width: '100%',
      height: 260,
      justifyContent: 'center',
      alignItems: 'center'
  },
  carousel: {
      flex: 1,
      overflow: 'visible'
  },
  carouselImage: {
      width: 240,
      height: 250,
      borderRadius: 10,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.9)'
  }, 
  carouselText: {
      padding: 14,
      color: '#fff',
      position: 'absolute',
      bottom: 10,
      left: 2,
      fontWeight: 'bold'
  },
  carouselIcon: {
      position: 'absolute',
      top: 15,
      right: 15
  },
  movieInfoContainer: {
      flexDirection: 'row',
      marginTop: 4,
      justifyContent: 'space-between',
      width: Dimensions.get('window').width - 14
  },
  movieInfoName: {
      paddingLeft: 14,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 8
  },
  movieInfoStat: {
    paddingLeft: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.6
  },
  palyIconContainer: {
      backgroundColor: '#212121',
      padding: 18,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      borderWidth: 4,
      borderColor: 'rgba(92,155,249,0.2)',
      marginBottom: 14,

  },

});
