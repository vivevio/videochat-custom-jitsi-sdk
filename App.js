import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

class App extends Component {
  constructor(props) {
    super(props);
    this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
    this.onConferenceJoined = this.onConferenceJoined.bind(this);
    this.onConferenceWillJoin = this.onConferenceWillJoin.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const url = 'https://meet.nativetalk.co/birrudevtest'; // can also be only room name and will connect to jitsi meet servers
      const userInfo = { displayName: 'User', email: 'user@example.com' };
      JitsiMeet.call(url, userInfo);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }

  onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
  }

  onConferenceJoined(nativeEvent) {
    /* Conference joined event */
  }

  onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
  }

  render() {
    return (
      <View style={{ backgroundColor: 'black',flex: 1 }}>
        <JitsiMeetView onConferenceTerminated={this.onConferenceTerminated} onConferenceJoined={this.onConferenceJoined} onConferenceWillJoin={this.onConferenceWillJoin} style={{ flex: 1, height: '100%', width: '100%' }} />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});