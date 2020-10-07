import React, {useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ProgressiveImage from './utils/progressiveImage';
import axios from 'axios'
import { API_KEY, localeLanguageTag } from '../service/config';
import dataSectionMyList from '../data/sectionMyList'

export default function ListMovies({ title, genres }) {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        console.log(localeLanguageTag)
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${localeLanguageTag}&sort_by=popularity.desc&with_genres=${genres}`)
            .then(res => {
                setData(res.data);
                // console.log(res.data);
                // setBackgroundData({
                //     uri: `https://image.tmdb.org/t/p/w440_and_h660_face${res.data.results[0].poster_path}`,
                //     bg:  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${res.data.results[0].backdrop_path}`,
                //     name: res.data.results[0].title,
                //     stat: res.data.results[0].release_date,
                //     desc: res.data.results[0].overview.substr(0, 230),
                //     vote: res.data.results[0].vote_average
                // })
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
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 8, marginBottom: 8}}>
                    <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Filmes de {title}</Text>
                </View>
                <FlatList
                    style={{marginBottom: 30}}
                    data={data.results}
                    horizontal={true}
                    decelerationRate="fast"
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style={{marginRight: 8}}>
                                <ProgressiveImage source={{uri: `https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}`}} style={{height: 165, width: 110, borderRadius: 10}} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
