import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LIGHT_GRAY, MAGENTA, VIOLET, WHITE } from '../../assets/colors/index';

function MyTabBar({ state, descriptors, navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            switch (route.name) {
                case 'HomeNavigator': 
                    navigation.navigate("HomeNavigator",{screen: "Home"});
                    break;
                default: 
                    navigation.navigate(route.name);
                    break;
            };
        };

        return (
          <TouchableOpacity
            key={index}
            delayPressIn={0}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.button}
          >
            {options.tabBarIcon({color: isFocused ? MAGENTA : LIGHT_GRAY, size: 25})}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: WHITE,
        elevation: 7
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});

export default MyTabBar;