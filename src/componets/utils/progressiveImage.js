import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

class ProgressiveImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image {...this.props} />
      </View>
    );
  }
}
export default ProgressiveImage;

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: 'rgba(70,70,70,0.5)',
    borderRadius: 10,
    opacity: 1
  },
});
