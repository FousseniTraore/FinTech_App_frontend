import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormField = ({ title, value, handleChangeText, otherStyles, keyboardType = 'default' }) => {
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
  },
});

export default FormField;
