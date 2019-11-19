import React, { Component } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

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
//             width: 100,
//             height: 100,
//             backgroundColor: "cyan"
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: "skyblue"
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: "powderblue"
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: "green"
//           }}
//         />
//       </View>
//     );
//   }
// }

// // flex - tuto
// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1, backgroundColor: "powderblue" }} />
//         <View style={{ flex: 2, backgroundColor: "skyblue" }} />
//         <View style={{ flex: 3, backgroundColor: "steelblue" }} />
//       </View>
//     );
//   }
// }

// // height and width - tuto
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View
//           style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
//         />
//         <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
//         <View
//           style={{ width: 150, height: 150, backgroundColor: "steelblue" }}
//         />
//       </View>
//     );
//   }
// }

// // styles - tuto
// const styles = StyleSheet.create({
//   bigBlue: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 30
//   },
//   red: {
//     color: "red"
//   }
// });

// export default class LotOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>Just Red</Text>
//         <Text style={styles.bigBlue}>BigBlue</Text>
//         <Text style={[styles.bigBlue, styles.red]}>Big Red</Text>
//         <Text style={[styles.red, styles.bigBlue]}>Big Blue</Text>
//       </View>
//     );
//   }
// }

// // state - tuto
// class Blink extends Component {
//   componentDidMount() {
//     setInterval(() => {
//       this.setState(prev => ({ isShowingText: !prev.isShowingText }));
//     }, 1000);
//   }
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//     return <Text>{this.props.text}</Text>;
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text="I love to blink"></Blink>
//         <Blink text="Yes blinking is so great" />
//         <Blink text="Why did they ever take this out of HTML" />
//         <Blink text="Look at me look at me look at me" />
//       </View>
//     );
//   }
// }

// // props - tuto
// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{ alignItems: "center" }}>
//         <Text> Hello {this.props.name} </Text>
//       </View>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{ alignItems: "center", top: 50 }}>
//         <Greeting name="Rexxar" />
//         <Greeting name="Jaina" />
//         <Greeting name="Valeera" />
//       </View>
//     );
//   }
// }

// // Image - Tuto
// export default class Bannas extends Component {
//   render() {
//     let pic = {
//       uri:
//         "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
//     };
//     return <Image source={pic} style={{ width: 193, height: 110 }} />;
//   }
// }
