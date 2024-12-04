import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useOrder } from '@/view-model/coffee-view-model';


const Profile = () => {

  const { setProfile, profile } = useOrder();

  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);
  const [address, setAddress] = useState(profile.address);
  const [avatar, setAvatar] = useState(profile.avatar);

  useEffect(() => {
    setProfile({
      name,
      email,
      phone,
      address,
      avatar,
  })}, [name,
    email,
    phone,
    address,
    avatar,]);

  // useEffect(() => {
  //   console.log(avatar);

  //   console.log(profile.avatar);
  // } , [email]);


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
    console.log('Pick avatar');
    // Request camera roll permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to set an avatar!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images', // Updated to use string instead of enum
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });


    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }

    console.log(profile.avatar);
};


  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleAvatarPick}>
          {avatar ? (
            <Image source={profile.avatar} style={styles.avatar} />
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
      <TouchableOpacity style={styles.saveButton}
      //  onPress={handleSave}
      >
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