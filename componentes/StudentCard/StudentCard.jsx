import React, { useEffect, useState } from "react"
import { View, Image, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"

export default function StudentCard({ name, register }) {
  const { theme } = useTheme()
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const randomImageApi = `https://zoo-animal-api.herokuapp.com/animals/rand/1`

  useEffect(() => {
    function getImage() {
      setLoading(true)
      fetch(randomImageApi)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false)
          setImage(json)
        })
        .catch((error) => {
          setLoading(false)
          setError(true)
        })
    }
    getImage()
  }, [])

  return (
    <View style={{ ...styles.card, backgroundColor: theme.secondaryColor }}>
      {loading
        ? <View style={{position: "relative", top: '30%'}}>
          <ActivityIndicator size={"large"} />
        </View>
        : <Image
          source={!error && image && image[0].image_link ? { uri: image[0].image_link } : require('../../img/avatar.png')}
          style={styles.avatar}
          resizeMode='contain'
        />}
      <View style={styles.name}>
        <Text style={{ ...styles.text, color: theme.textColor }}>{name}</Text>
        <Text style={{ ...styles.text, color: theme.textColor }}>{register}</Text>
      </View>

    </View>
  )
}
