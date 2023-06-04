import { LinearGradient } from 'expo-linear-gradient'
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { THEME } from '../../theme'
import { styles } from './styles'

export interface GameCardProps {
  id: string
  name: string
  _count: {
    Ad: number
  }
  bannerUrl: string
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>
            {data._count.Ad === 1
              ? `${data._count.Ad} anúncio`
              : `${data._count.Ad} anúncios`}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
