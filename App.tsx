import ZendeskChat from '@zanechua/react-native-zendesk-chat';

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

let user = {
  name: null,
  email: null,
  phone: null,
  tags: [],
  department: null,
};

const openChat = () => {
  if (user.name) {
    ZendeskChat.startChat({
      name: user.name,
      email: user.email,
      phone: user.phone,
      tags: user.tags,
      department: user.department,
    });
  }
};

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Button title={'Open Chat'} onPress={openChat} color={'#ff0f00'} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },
});

export default App;
