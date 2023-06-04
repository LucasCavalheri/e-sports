import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logoImg from '../../assets/logo-nlw-esports.png'

import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { GameParams } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { Heading } from '../../components/Heading'
import { THEME } from '../../theme'
import { styles } from './styles'

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const route = useRoute()
  const game = route.params as GameParams

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.15.12:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading subtitle="Conecte-se e comece a jogar!" title={game.name} />
        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard onConnect={() => {}} data={item} />
          )}
          horizontal
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo no momento.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  )
}
