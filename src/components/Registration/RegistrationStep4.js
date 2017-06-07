import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
const t = require('tcomb-form-native/lib');
import { AsyncStorage } from 'react-native';

const Form = t.form.Form;

// form model
const structure = t.struct({
  pushNotifications: t.Boolean,
  emailNotifications: t.Boolean,
  smsNotifications: t.Boolean,
  viberNotifications: t.Boolean
});

// form options
const options = {
  fields: {
    pushNotifications: {
      label: 'Push notifications',
      onTintColor: '#b1e35f'
    },
    emailNotifications: {
      label: 'Email',
      onTintColor: '#b1e35f'
    },
    smsNotifications: {
      label: 'SMS',
      onTintColor: '#b1e35f'
    },
    viberNotifications: {
      label: 'Viber',
      onTintColor: '#b1e35f'
    },
  },
}; 

export default class RegistrationStep4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushNotifications: (AsyncStorage.getItem('pushNotifications') == 'true'),
      emailNotifications: (AsyncStorage.getItem('emailNotifications') == 'true'),
      smsNotifications: (AsyncStorage.getItem('smsNotifications') == 'true'),
      viberNotifications: (AsyncStorage.getItem('viberNotifications') == 'true')
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.saveValues(value);
    }
  }

  onChange() {
    AsyncStorage.setItem('smsNotifications', 'true');
    var value = this.refs.form.getValue();
    if (value) {
      this.setState(value);
    };
    
    const dumpRaw = () => {
  return AsyncStorage.getAllKeys().then(keys => {
    return Promise.reduce(keys, (result, key) => {
      return AsyncStorage.getItem(key).then(value => {
        result[key] = value;
        return result;
      });
    }, {});
  });
};

dumpRaw().then(data => console.log(data));
  }
  
  render() {
    return (
       <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.heading}>Notifications</Text>
          <Text style={styles.caption}>Please choose the most convenient ways to receive notifications from our app.</Text>
          <Form
            ref="form"
            type={structure}
            options={options}
            value={this.state}
            onChange={this.onChange}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.submit}
        >
          <Text style={styles.submitText}> Finish </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 15
  },
  content: {
    //alignSelf: 'center',
  },
  heading: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'Avenir',
    fontWeight: '100',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 25,
  },
  caption: {
    fontSize: 17,
    maxWidth: 260,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },
  submit: {
    alignSelf: 'center',
    marginVertical: 25
  },
  submitText: {
    fontSize: 24,
    color: '#b1e35f',
    fontFamily: 'Avenir',
  }
});


