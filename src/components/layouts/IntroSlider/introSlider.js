import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo';
import styles from './Styles';

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
          <Text style={[styles.title, styles.additional]}>Extra Features</Text>
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
