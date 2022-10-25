import React, { useEffect, useState } from "react"
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"

export default function StudentCard({ name, register }) {
  const { theme } = useTheme()
  const [allImages, setAllImages] = useState()
  const randomImageApi = `https://zoo-animal-api.herokuapp.com/animals/rand/1`

  useEffect(() => {
    function getImages () {
      fetch(randomImageApi)
      .then((response) => response.json())
      .then((json) => setAllImages(json))
      .catch((error) => console.log(error))
    }
    getImages()
  },[])

  if (allImages) console.log(allImages[0].image_link)

  return (
    <View style={{ ...styles.card, backgroundColor: theme.secondaryColor }}>
      <Image
        source={require('../../img/avatar.png')}
        style={styles.avatar}
        resizeMode='contain'
      />
      <View style={styles.name}>
        <Text style={{...styles.text, color: theme.textColor}}>{name}</Text>
        <Text style={{...styles.text, color: theme.textColor}}>{register}</Text>
      </View>

    </View>
  )
}
