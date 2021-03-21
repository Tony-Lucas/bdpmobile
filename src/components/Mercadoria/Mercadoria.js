import React, { useState } from "react"
import { Text, View, SafeAreaView } from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Svg, { Path } from "react-native-svg"

export default function Mercadoria({ navigation }) {

    const [mercadorias, setMercadorias] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            const getMercadorias = async () => {
                const token = await AsyncStorage.getItem("token")
                const result = await fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/limite/${10}/${0}/${token}`);
                const json = await result.json()
                setMercadorias(json.mercadoria[0])
            }

            getMercadorias()

            return () => {
                setMercadorias([])
            };
        }, [])
    );
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column", alignItems: "center", paddingTop: 15 }}>
            <View style={{ width: "82%", marginTop: 10, marginBottom: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 28 }}>Mercadorias</Text>
                <Text style={{ backgroundColor: "#546DE5", fontSize: 19, paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6, color: "#fff", borderRadius: 5 }} onPress={() => navigation.navigate("NovaMercadoria")}>Nova</Text>
            </View>
            <View style={{ width: "82%", backgroundColor: "gray", height: 2 }}>
                {null}
            </View>
            <View style={{ width: "82%", marginTop: 20 }}>
                <Text style={{ fontSize: 17, fontFamily: "Ubuntu-Regular" }}>Exibindo {mercadorias.length}</Text>
            </View>
            <View style={{ width: "82%", flexDirection: "column", marginTop: 10 }}>
                {mercadorias.map(item => {
                    return (
                        <View key={item.id} style={{ paddingTop: 10, paddingBottom: 10, marginTop: 10 ,flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"}}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 17 }}>{item.nome}</Text>
                            <Text style={{backgroundColor:"#E6C255",padding:10,borderRadius:5}}>
                                <Svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M22 7.24a.999.999 0 00-.29-.71l-4.24-4.24a.999.999 0 00-.71-.29 1 1 0 00-.71.29l-2.83 2.83L2.29 16.05a1.001 1.001 0 00-.29.71V21a1 1 0 001 1h4.24a1.001 1.001 0 00.76-.29l10.87-10.93L21.71 8c.091-.097.166-.208.22-.33.01-.08.01-.16 0-.24a.697.697 0 000-.14l.07-.05zM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20zM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42z"
                                        fill="#fff"
                                    />
                                </Svg>
                            </Text>
                            
                        </View>
                    )
                })}
            </View>

        </SafeAreaView>
    )
}