import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios'
import { API_KEY, localeLanguageTag } from '../service/config';
import Carousel from 'react-native-snap-carousel';
import {FontAwesome5} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressiveImage from '../componets/utils/progressiveImage';
import ListMovies from '../componets/ListMovies'
import ListSeries from '../componets/ListSeries'

// import { getMovies } from '../service/api';

export default function Home({ navigation }) {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
\    const [backgroundData, setBackgroundData] = useState({
        uri: '',
        bg:  '',
        name: '',
        stat: '',
        desc: '',
        vote: ''
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
                    <ProgressiveImage source={{uri: `https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}`}} style={styles.carouselImage}>
                    </ProgressiveImage>
                        <Text style={{position: 'absolute', top: 5, left: '55%', padding: 2, paddingLeft: 8, paddingRight: 8,backgroundColor: 'red', color: '#fff', opacity: 0.7,fontSize: 12, fontWeight: 'bold'}}>Lançamento</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    useEffect(() => {
        console.log(localeLanguageTag)
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=${localeLanguageTag}&sort_by=popularity.desc`)
            .then(res => {
                setData(res.data);
                // console.log(res.data);
                setBackgroundData({
                    uri: `https://image.tmdb.org/t/p/w440_and_h660_face${res.data.results[0].poster_path}`,
                    bg:  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${res.data.results[0].backdrop_path}`,
                    name: res.data.results[0].title,
                    stat: res.data.results[0].release_date,
                    desc: res.data.results[0].overview.substr(0, 230),
                    vote: res.data.results[0].vote_average
                })
                setLoad(true);
            })
            .catch(err => {
                alert(err.message);
                setLoad(true)
            })
    }, []);

    if (!load) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    } else {


        return (
            <ScrollView style={{backgroundColor: '#000'}}>
                <View style={styles.caroselContentContainer}>
                    <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                        <ImageBackground
                            source={{uri: backgroundData.bg}}
                            style={styles.ImageBg}
                            blurRadius={0}
                        >
                            <LinearGradient
                            colors={['rgba(0,0,0,0.95)', 'transparent']}
                            // start={[0.5, .5]}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                height: '40%',
                                width: '100%',
                                opacity: 1, 
                            }}
                            />
                            <LinearGradient
                            colors={['transparent', '#000']}
                            // start={[0, 0.5]}
                            style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                height: '50%',
                                width: '100%',
                                opacity: 1, 
                            }}
                            />

                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.logo}
                                    source={require('../assets/logo.png')}
                                />
                            </View>
                            <View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.h1}>Próximos filmes a lançar</Text>
                            </View>

                            </View>
                            <View style={styles.caroselContentContainerView}>
                                <Carousel 
                                    style={styles.carousel}
                                    ref={carouselRef}
                                    data={data.results}
                                    renderItem={_renderItem}
                                    sliderWidth={width}
                                    itemWidth={220}
                                    inActiveOpacity={0.5}

                                    containerWidth={ width - 30 }
                                    separatorWidth={-15}
                                    
                                    onSnapToItem={(index) => {
                                        setBackgroundData({
                                            uri: `https://image.tmdb.org/t/p/w440_and_h660_face${data.results[index].poster_path}`,
                                            bg:  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${data.results[index].backdrop_path}`,
                                            name: data.results[index].title,
                                            stat: data.results[index].release_date,
                                            desc: data.results[index].overview.substr(0, 370),
                                            vote: data.results[index].vote_average
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
                                    <FontAwesome5 name='play' size={22} color='#E40055' style={{marginLeft: 4}} />
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


                    <ListMovies title='aventura' genres='12' />

                    <ListSeries title='' genres='' />

                    <ListMovies title='comédia' genres='35' />

                    <ListMovies title='ficção científica' genres='878' />

                    <ListMovies title='terror' genres='27' />

                    <ListMovies title='fantasia, animação e família' genres='14,16,10751' />

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
    
  },
  caroselContentContainer: {
      flex: 1,
      backgroundColor: '#000',
      height: 720,
      paddingHorizontal: 14,
      zIndex: 2
  },
  ImageBg: {
      flex: 1,
      height: null,
      width: null,
      opacity: 1,
      justifyContent: 'flex-start',
      zIndex: 2
  },
  logoContainer: {
    marginVertical: 0,
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'auto',
    marginTop: 30,
    marginLeft: 14
 },

  searchBoxContainer: {
      backgroundColor: '#fff',
      elevation: 10,
      borderRadius: 4,
      //top: 40,
      marginVertical: 0,
      width: '92%',
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 8,
  },
  searchBox: {
      padding: 6,
      paddingLeft: 20,
      fontSize: 16
  },
  searchBoxIcon: {
      position: 'absolute',
      right: 20,
      top: 6
  },
  titleContainer: {
    marginVertical: 10,
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'auto',
    marginTop: 0,
    marginLeft: 14
 },

  caroselContentContainerView: {
      width: '100%',
      height: 330,
      justifyContent: 'center',
      alignItems: 'center'
  },
  carousel: {
      flex: 1,
      overflow: 'visible'
  },
  carouselImage: {
      width: 220,
      height: 330,
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
      marginBottom: 8,
      maxWidth: 280
  },
  movieInfoStat: {
    paddingLeft: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.6
  },
  palyIconContainer: {
      backgroundColor: '#01ADB9',
      padding: 18,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      borderWidth: 4,
      borderColor: 'rgba(228,0,85,1)',
      marginBottom: 14,

  },
  logo: {
    width: 253,
    height: 55,
  },
  h1: {
    color: '#FFF', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginRight: 10,
    marginBottom: 8, 
    marginTop: 8,
  },
});
