import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { withTheme } from "styled-components/native";
import { Video } from "expo-av";
import { StatusBar, View, Dimensions } from "react-native";

const PlayMovieScreen = ({ theme, route }) => {
	const { iframe_video_link, jw_video_link } = route.params;
	const removeContainer = `document.querySelector("#overlay-container").style.display = 'None'`;
	const { width, height } = Dimensions.get("window");

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme.black,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<StatusBar />
			{iframe_video_link ? (
				<WebView
					injectedJavaScript={removeContainer}
					source={{ uri: iframe_video_link }}
				/>
			) : (
				<Video
					source={{
						uri: jw_video_link
					}}
					rate={1.0}
					ref={videoRef}
					volume={1.0}
					isMuted={false}
					resizeMode="contain"
					useNativeControls
					shouldPlay
					isLooping
					style={{
						width,
						height: 300
					}}
				/>
			)}
		</View>
	);
};

export default withTheme(PlayMovieScreen);
