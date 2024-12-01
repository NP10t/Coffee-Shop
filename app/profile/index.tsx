import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [name, setName] = useState('Anderson');
  const [phone, setPhone] = useState('+60134589525');
  const [email, setEmail] = useState('anderson@email.com');
  const [address, setAddress] = useState('3 Addersion Court Chino Hills, HO56824, United States');
  const [avatar, setAvatar] = useState(null);

  const handleSave = () => {
    // Save the updated user information
    console.log('Saved:', { name, phone, email, address, avatar });
    Alert.alert('Profile Updated', 'Your profile information has been saved successfully.');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Account deleted') },
      ],
      { cancelable: true }
    );
  };

  const handleAvatarPick = async () => {
    // Request camera roll permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to set an avatar!');
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleAvatarPick}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <FontAwesome5 name="user-circle" size={64} color="#333" />
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.nameInput}
          value={name}
          onChangeText={setName}
          placeholder="Full name"
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <FontAwesome5 name="phone-alt" size={24} color="#333" />
          <TextInput
            style={styles.infoText}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone number"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.infoItem}>
          <FontAwesome5 name="envelope" size={24} color="#333" />
          <TextInput
            style={styles.infoText}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.infoItem}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#333" />
          <TextInput
            style={styles.infoText}
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameInput: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;