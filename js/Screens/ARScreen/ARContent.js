import React, { Component } from "react";
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroNode,
  ViroAnimations,
  ViroImage
} from "react-viro";

export default class ARContent extends Component {
  constructor() {
    super();

    this.state = {
      text: "kellogg",
      mannerText: 1000,
      kelloggFound: false,
      felixFound: false,
      liptonFound: false,
      nesquikFound: false,
      sneakFound: false,
    };

    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroARImageMarker
          target={"kellogg"}
          onAnchorFound={() => {
            this.setState({ kelloggFound: true });
          }}
          onAnchorRemoved={() => {
          this.setState({ kelloggFound: false });
        }}
        >
          <ViroNode
            scale={[0, 0, 0.1]}
            position={[0.05, -0.02, 0]}
            rotation={[-90, 0, 0]}
            opacity={0}
            animation={{
              name: "rightBoxAnimation",
              run: this.state.kelloggFound,
              loop: true
            }}
          >
            <ViroImage
              height={2}
              width={2}
              position={[0, -0.3, 0.0]}
              scale={[0.4, 0.55, 0.8]}
              source={require("../../res/Kellog_Exchange.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[0, -1.3, 0.0]}
              scale={[0.4, 0.15, 0.8]}
              source={require("../../res/Kellog_Review.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[-1.2, 0.7, 0]}
              scale={[0.5, 0.18, 0.5]}
              source={require("../../res/Kellog_Title.png")}
            />
          </ViroNode>
        </ViroARImageMarker>
        <ViroARImageMarker
          target={"felix"}
          onAnchorFound={() => {
            this.setState({ felixFound: true });
          }}
          onAnchorRemoved={() => {
            this.setState({ felixFound: false });
          }}
        >
          <ViroNode
            scale={[0, 0, 0.1]}
            position={[0.05, -0.02, 0]}
            rotation={[-90, 0, 0]}
            opacity={0}
            animation={{
              name: "rightBoxAnimation",
              run: this.state.felixFound,
              loop: true
            }}
          >
            <ViroImage
              height={2}
              width={2}
              position={[0, -0.3, 0.0]}
              scale={[0.4, 0.55, 0.8]}
              source={require("../../res/Felix_Exchange.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[0, -1.3, 0.0]}
              scale={[0.4, 0.15, 0.8]}
              source={require("../../res/Felix_Review.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[-1.2, 0.7, 0]}
              scale={[0.5, 0.18, 0.5]}
              source={require("../../res/Felix_Title.png")}
            />
          </ViroNode>
        </ViroARImageMarker>
        <ViroARImageMarker
          target={"lipton"}
          onAnchorFound={() => {
            this.setState({ liptonFound: true });
          }}
          onAnchorRemoved={() => {
            this.setState({ liptonFound: false });
          }}
        >
          <ViroNode
            scale={[0, 0, 0.1]}
            position={[0.05, -0.02, 0]}
            rotation={[-90, 0, 0]}
            opacity={0}
            animation={{
              name: "rightBoxAnimation",
              run: this.state.liptonFound,
              loop: true
            }}
          >
            <ViroImage
              height={2}
              width={2}
              position={[-1.2, 0.7, 0]}
              scale={[0.4, 0.55, 0.8]}
              source={require("../../res/Lipton_Exchange.png")}
            />
            {/*<ViroImage*/}
            {/*  height={2}*/}
            {/*  width={2}*/}
            {/*  position={[0, -1.3, 0.0]}*/}
            {/*  scale={[0.4, 0.15, 0.8]}*/}
            {/*  source={require("../../res/Lipton_Review.png")}*/}
            {/*/>*/}
            <ViroImage
              height={2}
              width={2}
              position={[1.2, -0.7, 0]}
              scale={[0.5, 0.18, 0.5]}
              source={require("../../res/Lipton_Title.png")}
            />
          </ViroNode>
        </ViroARImageMarker>
        <ViroARImageMarker
          target={"nesquik"}
          onAnchorFound={() => {
            this.setState({ nesquikFound: true });
          }}
          onAnchorRemoved={() => {
            this.setState({ nesquikFound: false });
          }}
        >
          <ViroNode
            scale={[0, 0, 0.1]}
            position={[0.05, -0.02, 0]}
            rotation={[-90, 0, 0]}
            opacity={0}
            animation={{
              name: "rightBoxAnimation",
              run: this.state.nesquikFound,
              loop: true
            }}
          >
            <ViroImage
              height={2}
              width={2}
              position={[0.5, 0.1, 0.0]}
              scale={[0.5, 0.65, 0.8]}
              source={require("../../res/Nesquik_Exchange.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[0.5, -1.2, 0.0]}
              scale={[0.55, 0.25, 0.8]}
              source={require("../../res/Nesquik_Review.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[-0.9, 1.2, 0]}
              scale={[0.5, 0.18, 0.5]}
              source={require("../../res/Nesquik_Title.png")}
            />
          </ViroNode>
        </ViroARImageMarker>
        <ViroARImageMarker
          target={"sneak"}
          onAnchorFound={() => {
            this.setState({ sneakFound: true });
          }}
          onAnchorRemoved={() => {
            this.setState({ sneakFound: false });
          }}
        >
          <ViroNode
            scale={[0, 0, 0.1]}
            position={[0.05, -0.02, 0]}
            rotation={[-90, 0, 0]}
            opacity={0}
            animation={{
              name: "rightBoxAnimation",
              run: this.state.sneakFound,
              loop: true
            }}
          >
            <ViroImage
              height={2}
              width={2}
              position={[-.1, 0, 0.0]}
              scale={[0.4, 0.55, 0.8]}
              source={require("../../res/Sneak_Exchange.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[-2, 0.36, 0]}
              scale={[0.5, 0.18, 0.5]}
              source={require("../../res/Sneak_Review.png")}
            />
            <ViroImage
              height={2}
              width={2}
              position={[-1, .8, 0]}
              scale={[0.5, 0.18, 0.5]}
              source={require("../../res/Sneak_Title.png")}
            />
          </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Loaded"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  kellogg: {
    source: require("../../res/kellogy.png"),
    orientation: "Up",
    physicalWidth: 0.195 // real world width in meters
  },
  nesquik: {
    source: require("../../res/nesquik.png"),
    orientation: "Up",
    physicalWidth: 0.13 // real world width in meters
  },
  sneak: {
    source: require("../../res/sneak-min.jpg"),
    orientation: "Up",
    physicalWidth: 0.08 // real world width in meters
  },
  felix: {
    source: require("../../res/felix.png"),
    orientation: "Up",
    physicalWidth: 0.035 // real world width in meters
  },
  lipton: {
    source: require("../../res/lipton.png"),
    orientation: "Up",
    physicalWidth: 0.04 // real world width in meters
  }
});


ViroAnimations.registerAnimations({
  rightBoxAnimation: {
    properties: {
      // scaleX: 1, scaleY: 1, scaleZ: 1,
      scaleX: 0.1,
      scaleY: 0.1,
      opacity: 1.0,
      positionX: 0.1
    },
    easing: "Bounce",
    duration: 500
  }
});

module.exports = ARContent;
