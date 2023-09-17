import React from 'react';
import { SafeAreaView, StyleSheet, Image, ActivityIndicator, Text } from 'react-native';

export default LoadingScreen = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Image
          style={{ width: 250, height: 250, }}
          source={require("../assest/img/money1.png")}
        />
      </View>
      <Text>selamlar</Text>
      <ActivityIndicator
        style={[styles.container, styles.horizontal]}
        size="large"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});