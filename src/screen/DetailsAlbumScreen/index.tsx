import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {useQuery} from 'react-query';
import {getAlbum} from '../../services';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {msToTime} from '../../utils/helpers';
import {Header, Loader} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface TrackType {
  duration: number;
  name: string;
  url: string;
}
const DetailsAlbumScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Details'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const albumName: string = route.params.albumName;

  const {data, isLoading, isRefetching, refetch} = useQuery('album', () =>
    getAlbum(albumName),
  );
  const tracks = useMemo(() => data?.album?.tracks?.track || [], [data]);

  const goBack = () => navigation.goBack();

  const goToDetails = () =>
    navigation.navigate('Artist', {
      wiki: data?.album?.wiki?.content,
      albumName: albumName,
    });

  const renderHeaderOfAlbum = () => (
    <Pressable style={styles.detailsButton} onPress={goToDetails}>
      <Text style={styles.detailsText}>
        {`Read more details about album: ${albumName} →`}
      </Text>
    </Pressable>
  );

  const renderTrack = ({item}: {item: TrackType}) => (
    <View style={styles.itemWrapper}>
      <Text style={styles.trackLabel} numberOfLines={1}>
        {item.name}
      </Text>
      <Text>{msToTime(item.duration)}</Text>
    </View>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyWrapper}>
      <Text style={styles.detailsText}>No one tracks</Text>
    </View>
  );

  return (
    <SafeAreaView edges={['top']} style={styles.root}>
      <Header title={albumName} subtitle="Tracks" goBack={goBack} />
      <FlatList
        data={tracks}
        keyExtractor={item => item.name}
        renderItem={renderTrack}
        refreshing={isRefetching}
        onRefresh={refetch}
        ListHeaderComponent={renderHeaderOfAlbum}
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={renderEmptyList}
      />
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default DetailsAlbumScreen;
