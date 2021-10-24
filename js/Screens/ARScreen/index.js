import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import receiptIcon from "./img/baseline_receipt_long_white_24dp.png";

import { ViroARSceneNavigator } from "react-viro";
import { PRIMARY_BLUE, SECONDARY_BLUE } from "../../style";
import RBSheet from "react-native-raw-bottom-sheet";
import ItemsList from "./components/ItemsList";
import closeIcon from "./img/baseline_close_white_24dp.png";

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "API_KEY_HERE",
};

// Sets the default scene you want for AR and VR
var InitialARScene = require("./ARContent");
// var InitialVRScene = require('./js/HelloWorldScene');
// var BusinessCard = require('./js/BusinessCard');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ARIndexScreen extends Component {
  constructor() {
    super();

    this.refRBSheet = React.createRef();
    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
      count: 0,
    };
    this._getARNavigator = this._getARNavigator.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          numberOfTrackedImages={5}
          initialScene={{
            scene: InitialARScene,
            // passProps: { log: (text) => this.setState({console: JSON.stringify(text, null, 2)})}
          }}
        />
        <TouchableOpacity
          style={{
            zIndex: 1000,
            position: "absolute",
            top: 20,
            left: 20,
          }}
          onPress={() => this.props.navigate('start')}
        >
          <Image source={closeIcon} style={{ width: 30, height: 30 }} resizeMode='cover'/>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            zIndex: 1000,
            position: "absolute",
            bottom: 10,
            paddingHorizontal: 20,
            height: 50,
            width: "100%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.setState({ count: this.state.count + 1 })}
            style={{
              backgroundColor: PRIMARY_BLUE,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: 10,
              borderRadius: 15,
              height: 50,
              marginRight: 14,
              flexGrow: 1,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                lineHeight: 28,
                fontWeight: "800",
                fontFamily: "Helvetica",
              }}
            >
              Add to Basket
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.refRBSheet.current.open()}
            style={{
              backgroundColor: SECONDARY_BLUE,
              borderRadius: 15,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              flexGrow: 0,
            }}
          >
            <View>
              <Image
                source={receiptIcon}
                style={{ width: 24, height: 24 }}
                resizeMode="cover"
              />
              <View
                style={{
                  width: 24,
                  height: 24,
                  textAlign: "center",
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  top: -22,
                  right: -22,
                  borderRadius: 12,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: SECONDARY_BLUE,
                    fontWeight: "600",
                  }}
                >
                  {this.state.count}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={this.refRBSheet}
          height={640}
          closeOnDragDown={true}
          closeOnPressMask={true}
          // onClose={() => refetch()} // TODO: save first
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: 1,
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
          }}
        >
          <View style={{ flexDirection: "column", padding: 24 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  color: SECONDARY_BLUE,
                  fontSize: 24,
                  fontWeight: "700",

                  marginBottom: 24,
                }}
              >
                Cart
              </Text>
            </View>
            <ItemsList setPrice={this.props.setPrice} />

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => this.props.navigate("payment")}
              style={{
                backgroundColor: PRIMARY_BLUE,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: 10,
                borderRadius: 15,
                height: 60,
                marginRight: 0,
                flexGrow: 1,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  lineHeight: 28,
                  fontWeight: "800",
                  fontFamily: "Helvetica",
                }}
              >
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
  }

  // Presents the user with a choice of an AR or VR experience

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        numberOfTrackedImages={5}
        initialScene={{
          scene: ARContent,
          passProps: {
            log: (text) =>
              this.setState({ console: JSON.stringify(text, null, 2) }),
          },
        }}
      />
    );

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ height: 500 }}>
          <ViroARSceneNavigator
            {...this.state.sharedProps}
            numberOfTrackedImages={5}
            initialScene={{
              scene: ARContent,
              passProps: {
                log: (text) =>
                  this.setState({ console: JSON.stringify(text, null, 2) }),
              },
            }}
          />
        </View>
        <ScrollView
          style={{
            height: 0,
            width: "100%",
            bottom: 0,
            backgroundColor: "white",
          }}
        >
          <Text>{this.state.console}</Text>
        </ScrollView>
      </View>
    );
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET,
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

module.exports = ARIndexScreen;
