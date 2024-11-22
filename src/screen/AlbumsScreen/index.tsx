import React, {useMemo} from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import {useQuery} from 'react-query';
import {getTopAlbums} from '../../services';
import {Header, Loader} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface AlbumType {
  artist: {
    name: string;
    url: string;
  };
  name: string;
  playcount: number;
  url: string;
}

const AlbumsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Albums'>>();
  const {data, isLoading, isRefetching, refetch} = useQuery('albums', () =>
    getTopAlbums(),
  );
  const albums = useMemo(() => data?.topalbums?.album || [], [data]);

  const onOpenAlbum = (albumName: string) => {
    navigation.navigate('Details', {
      albumName,
    });
  };

  const renderAlbum = ({item}: {item: AlbumType}) => (
    <Pressable
      style={styles.itemWrapper}
      onPress={() => onOpenAlbum(item.name)}>
      <Text style={styles.albumLabel}>{item.name}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView edges={['top']} style={styles.root}>
      <Header title="Cher" subtitle="Top Albums" />
      <FlatList
        data={albums}
        renderItem={renderAlbum}
        keyExtractor={item => item.name}
        refreshing={isRefetching}
        onRefresh={refetch}
        contentContainerStyle={styles.flatList}
      />
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default AlbumsScreen;
