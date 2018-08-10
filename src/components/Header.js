import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { colors } from '../styles';

export default Header = props => (
    <View>
        <Text style={ styles.title}>App Delivery</Text>
    </View>
);

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        color: colors.white,
        fontWeight: 'bold'
    }
})