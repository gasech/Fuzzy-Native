import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import menuIcon from '../../assets/menu-icon.png';
import closeIcon from '../../assets/close-icon.png';

export default function Nav({ state, descriptors, navigation }) {
  const [menuShow, setMenuShow] = useState(true);

  const toggleMenu = () => {
    menuShow ? setMenuShow(false) : setMenuShow(true);
  }

  return (
    <View style={styles.nav}>
      <Pressable onPress={toggleMenu}>
        <Image
          style={styles.menuIcon} source={menuIcon}
        />
      </Pressable>
      <View style={menuShow ? styles.sideBarHidden : styles.sideBar}>
        <View style={styles.flex}>
          <View style={styles.leftBar}>
            <Pressable style={styles.pressable} onPress={toggleMenu}>
              <Image
                style={styles.closeIcon}
                source={closeIcon}
              />
            </Pressable>
            <View style={styles.sideBarButtons}>
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
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                const onLongPress = () => {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  });
                };

                return (
                  <TouchableOpacity
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1 }}
                  >
                    <Text style={[{color: isFocused ? '#27bfe6' : 'white'}, styles.sideBarButton]}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <Pressable style={styles.pressable} onPress={toggleMenu}>
            <View style={styles.rightBar}>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: '55px',
    backgroundColor: '#2C2C2E',
    borderBottomColor: 'grey',
    borderBottomWidth: '1px',
  },
  navButton: {
    paddingLeft: '100px',
    backgroundColor: '#336a89',
    width: '10%',
  },
  menuIcon: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    height: '25px',
    width: '25px',
  },
  sideBar: {
    display: 'block',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '99999'
  },
  sideBarHidden: {
    display: 'none'
  },
  flex: {
    display: 'flex',
    position: 'fixed',
    flexDirection: 'row',
  },
  leftBar: {
    position: 'fixed',
    height: '100%',
    width: '75%',
    backgroundColor: '#2C2C2E',
  },
  sideBarButtons: {
    marginTop: '30px',
    marginLeft: '30px',
  },
  sideBarButton: {
    marginTop: '40px',
    fontSize: 20,
    fontWeight: '200',
  },
  closeIcon: {
    marginTop: '17px',
    marginLeft: '17px',
    height: '20px',
    width: '20px',
  },
  rightBar: {
    position: 'fixed',
    left: '75%',
    height: '100%',
    width: '25%',
    backgroundColor: '#2C2C2E80',
  },
  pressable: {
    width: '25px',
    height: '25px',
  }
});