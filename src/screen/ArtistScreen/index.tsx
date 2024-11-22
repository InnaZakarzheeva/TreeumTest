import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {Header, Loader} from '../../components';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getArtist} from '../../services';
import {useQuery} from 'react-query';
import RenderHTML from 'react-native-render-html';

const ArtistScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Artist'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Artist'>>();
  const wiki = route.params.wiki;
  const albumName = route.params.albumName;
  const {width} = Dimensions.get('screen');

  const {data, isLoading} = useQuery('artist', () => getArtist());

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView edges={['top']} style={styles.root}>
      <Header title={'Cher'} subtitle="Artist bio" goBack={goBack} />
      <ScrollView style={styles.scrollView}>
        <RenderHTML
          contentWidth={width}
          source={{html: data?.artist?.bio?.content}}
          baseStyle={styles.text}
        />
        <Header title={albumName} subtitle="Album details" />
        <RenderHTML
          contentWidth={width}
          source={{html: wiki}}
          baseStyle={styles.text}
        />
      </ScrollView>

      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default ArtistScreen;
