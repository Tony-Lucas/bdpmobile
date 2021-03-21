import React,{useState} from "react"
import { Text, Animated ,Easing} from "react-native"
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from "react-native-svg"

export default function LoadingTime() {

    const [spinRotate,setSpinRotate] = useState(new Animated.Value(0))

    Animated.loop(
        Animated.timing(
            spinRotate,
            {
                toValue:1,
                duration:4000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start()

    const spin = spinRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

    return (
        <Animated.Text style={{transform: [{rotate: spin}]}}>
            <Svg
                width={38}
                height={38}
                viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Defs>
                    <LinearGradient
                        x1="8.042%"
                        y1="0%"
                        x2="65.682%"
                        y2="23.865%"
                        id="prefix__a"
                    >
                        <Stop stopColor="#fff" stopOpacity={0} offset="0%" />
                        <Stop stopColor="#fff" stopOpacity={0.631} offset="63.146%" />
                        <Stop stopColor="#fff" offset="100%" />
                    </LinearGradient>
                </Defs>
                <G transform="translate(1 1)" fill="none" fillRule="evenodd">
                    <Path
                        d="M36 18c0-9.94-8.06-18-18-18"
                        stroke="url(#prefix__a)"
                        strokeWidth={2}
                    ></Path>
                    <Circle fill="#fff" cx={36} cy={18} r={1}></Circle>
                </G>
            </Svg>
        </Animated.Text>
    )

}



