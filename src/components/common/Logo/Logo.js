import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';

const Logo = () => (
  <View style={styles.imageOuterView}>
    <Image
      source={{
        uri:
          'https://d1qb2nb5cznatu.cloudfront.net/startups/i/4784928-963c639863cf77f25d3ec213c37db74c-medium_jpg.jpg?buster=1522462849',
      }}
      style={styles.imageStyle}
    />
    <Text style={styles.titleText}>Groceristar</Text>
  </View>
);

export default Logo;
