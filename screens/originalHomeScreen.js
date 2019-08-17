import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styled from 'styled-components'
// import { List, ListItem } from 'react-native-elements'
import { Button } from 'react-native'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { AuthSession } from 'expo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.travelImageContainer}>
          <QuestionnaireBlock />
        </View>

        <View style={styles.categoriesContainer}>     

          <OptionsBlock/>

          {/* <View>
            <Text style={{fontSize:20}}>LIBRARY</Text>
          </View>
          <View style={styles.btn}>
            <Text>Travel Info</Text>
          </View>
          <View style={styles.btn}>
            <Text>Get Help</Text>
          </View>
          <View style={styles.btn}>
            <Text>Air Quality Info</Text>
          </View> */}
        </View>
        
        {/* <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View> */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  //header: null,
  title: 'Home'
};

function QuestionnaireBlock() {
  return(
    <View>
      <Image
        source={
          __DEV__
            ? require('../assets/images/congo.jpg')
            : require('../assets/images/robot-prod.png')
        }
        style={styles.travelImage}
      />
    </View>
  );
}

function OptionsBlock() {
  return(
    <Button
      onPress={onPressTravelInfo}
      title='Travel Info'
      color='grey'
    />
  );
}

function onPressTravelInfo() {

}

// /* TODO: finish fill*/
// function OptionsBlock() {
//   // Example list of people
//   const list = [
//     {
//       name: 'Travel Info',
//       // avatar_url:
//     },
//     {
//       name: 'Chris Jackson',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//       subtitle: 'Vice Chairman'
//     }
//   ]
//   // TODO: buggy here
//   return(
//     <List containerStyle={{marginBottom: 20}}>
//       {
//         {list}.map((l) => (
//           <ListItem
//             roundAvatar
//             avatar={{uri:l.avatar_url}}
//             key={l.name}
//             title={l.name}
//           />
//         ))
//       }
//     </List>
//   );
// }

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

/* ------------------------------------- STYLE ----------------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'stretch'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  travelImageContainer: {
    alignItems: 'center'
  },
  travelImgAndText: {

  },
  travelImage: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'stretch',
    width: 400,
    height: 200,
    borderRadius: 15
  },
  questionnaireContainer: {
    
  },

  categoriesContainer: {
    marginLeft: 15
  },

  btn: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});





// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }