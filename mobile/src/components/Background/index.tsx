import { ImageBackground } from 'react-native'

import backgroundImg from '../../assets/background-galaxy.png'

import { ReactNode } from 'react'
import { styles } from './styles'

interface Props {
  children: ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
