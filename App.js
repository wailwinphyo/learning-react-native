import React, { Component } from "react";
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";

export default class Touchables extends Component {
  _onPressButton() {
    alert("You tapped the button");
  }
  _onLongPressButton() {
    alert("You long-pressed the button !");
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === "android"
              ? TouchableNativeFeedback.SelectableBackground()
              : ""
          }
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              TouchableNativeFeedback
              {Platform.OS !== "android" ? "Android Only" : ""}
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={this._onPressButton}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with long press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "red"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});
// handling touches - tuto
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert("You tapped the button !");
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button onPress={this._onPressButton} title="Press Me" />
//         </View>

//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>

//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button onPress={this._onPressButton} title="This looks great!" />
//           <Button onPress={this._onPressButton} title="OK!" color="#841584" />
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: "row",
//     justifyContent: "space-between"
//   }
// });

// // handling text output [ Pizza Transalator ] - tuto
// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//   }
//   render() {
//     return (
//       <View style={{ padding: 10 }}>
//         <TextInput
//           style={{ height: 40 }}
//           placeholder="Type here to translate !"
//           onChangeText={text => this.setState({ text })}
//           value={this.state.text}
//         />
//         <Text style={{ padding: 10, fontSize: 42 }}>
//           {this.state.text
//             .split(" ")
//             .map(word => word && "🍕")
//             .join(" ")}
//         </Text>
//       </View>
//     );
//   }
// }

// // layout with flex box - tuto
// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           alignContent: "stretch"
//         }}
//       >
//         <View
//           style={{
//             height: 100,
//             backgroundColor: "steelblue"
//           }}
//         />
//         <View
//           style={{
//             height: 100,
//             backgroundColor: "black"
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: "red"
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: "purple"
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: "orange"
//           }}
//         />
//         <View
//           style={{
