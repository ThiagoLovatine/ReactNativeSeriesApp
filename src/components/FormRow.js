import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormRow = props => {
    const { children } = props;
    return(
        <View>
            {children}
        </View>
    ) 
}

export default FormRow;

const styles = StyleSheet.create({

});