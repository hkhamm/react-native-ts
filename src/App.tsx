import React from "react"
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native"

interface State {
  squares: string[]
}

export default class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)
    this.state = {
      squares: ["powderblue", "skyblue", "steelblue"]
    }
  }

  rotate = () => {
    const squares: string[] = this.state.squares
    const square: string = squares.shift()
    squares.push(square)
    this.setState({squares})
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.rotate}>
        <View style={styles.container}>
          {this.state.squares.map((color: string, index: number) => {
            return <View key={`square${index}`} style={[styles.square, {backgroundColor: color}]} />
          })}
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  square: {
    flex: 1,
    height: "100%"
  }
})
