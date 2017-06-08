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
      pushNotifications: false,
      emailNotifications: false,
      smsNotifications: false,
      viberNotifications: false
    };
    
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // getting options from async storage
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          if (key in this.state) {
            this.setState({[key]: (value=='true')});
          }
        });
      });
    });
  }

  onChange() {
    var value = this.refs.form.getValue();
    if (value) {
      this.setState(value);
    };  
  }
  
  render() {
    const navigate = this.props.navigate;
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
          onPress={() => navigate('RegistrationDone')}
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


