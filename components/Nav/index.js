import React, { useState, useEffect } from 'react';
import { Image, Text, StyleSheet, Pressable, View } from 'react-native';

import menuIcon from '../../assets/menu-icon.png';
import closeIcon from '../../assets/close-icon.png';
import icon from '../../assets/favicon.png';

export default function Nav() {
  const [menuShow, setMenuShow] = useState(true);

  const toggleMenu = () => {
    menuShow ? setMenuShow(false) : setMenuShow(true);
    console.log(menuShow);
  }

  return (
    <>
      {/* SideBar */}
      <View style={menuShow ? styles.sideBarHidden : styles.sideBar}>
        <View style={styles.flex}>
          <View style={styles.leftBar}>
            <Pressable style={styles.pressable} onPress={toggleMenu}>
              <Image
                style={styles.closeIcon}
                source={closeIcon}
              />
            </Pressable>
          </View>
          <Pressable style={styles.pressable} onPress={toggleMenu}>
            <View style={styles.rightBar}>
            </View>
          </Pressable>
        </View>
      </View>

      {/* Nav */}
      <View style={styles.nav}>
        <Pressable onPress={toggleMenu}>
          <Image
            style={styles.menuIcon} source={menuIcon}
          />
        </Pressable>
        <View style={styles.center}>
          <Image style={styles.logo} source={icon} />
          <Text style={styles.appTitle}>Fuzzy Native</Text>
        </View>
      </View>
    </>
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
  logo: {
    marginTop: '6px',
    marginLeft: '23%',
    height: '40px',
    width: '40px',
  },
  appTitle: {
    fontSize: '18px',
    marginTop: '2px',
    marginLeft: '5px',
    color: 'white',
  },
  center: { 
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
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
  closeIcon: {
    marginTop: '15px',
    marginLeft: '15px',
    height: '25px',
    width: '25px',
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