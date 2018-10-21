import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo';

export const introSlider = props => (
  <View>
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      {props.key !== 'somethun3' ? (
        <View style={styles.mainContent}>
          {props.iconType === 'Ionicons' ? (
            <Ionicons
              style={{ backgroundColor: 'transparent' }}
              name={props.icon}
              size={200}
              color={props.iconColors}
            />
          ) : (
            <FontAwesome
              style={{ backgroundColor: 'transparent', fontSize: 300 }}
              name={props.icon}
              size={200}
              color={props.iconColors}
            />
          )}
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text
            style={[
              styles.title,
              {
                color: '#88C5EE',
                marginVertical: 10,
                borderBottomColor: '#88C5EE',
                borderBottomWidth: 2,
              },
            ]}
          >
            Extra Features
          </Text>
          <FlatList
            data={props.textArray}
            renderItem={({ item }) => (
              <LinearGradient
                style={styles.extraTextGradient}
                colors={['#6FC0F6', '#6FC0F6']}
                start={{ x: 0, y: 0.1 }}
                end={{ x: 0.1, y: 1 }}
              >
                <Text style={styles.extraText}>
                  <FontAwesome
                    style={styles.check}
                    name={props.icon}
                    size={200}
                    color={props.iconColors}
                  />
                  {` ${item.text}`}
                </Text>
              </LinearGradient>
            )}
          />
        </View>
      )}
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  extraText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  extraTextGradient: {
    marginTop: 23,
    margin: 8,
    borderRadius: 15,
  },
  check: {
    fontSize: 23,
    backgroundColor: 'transparent',
    padding: 5,
  },
});
