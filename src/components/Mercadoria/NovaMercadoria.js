import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState } from "react"
import { Text, TextInput, View, SafeAreaView } from "react-native"
import Svg, { Path } from "react-native-svg"

export default function NovaMercadoria({ navigation }) {

    const [nome, setNome] = useState()
    const [precoCompra, setPrecoCompra] = useState()
    const [precoVenda, setPrecoVenda] = useState()

    const addMercadoria = async () => {
        if (nome && precoCompra && precoVenda) {
            const result = await fetch("https://baldosplasticosapi.herokuapp.com/mercadoria", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome: nome, precoCompra: precoCompra, precoVenda: precoVenda, token: await AsyncStorage.getItem("token") })
            });
            const json = await result.json()
            if (json.success) {
                navigation.goBack()
            }
        }
    }

    return (
        <React.Fragment>
            <SafeAreaView style={{ position: "absolute", paddingTop: 20, paddingLeft: 20 }}>
                <Text style={{ backgroundColor: "#546DE5",marginTop:15,marginLeft:15 ,flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:5,paddingLeft:15,paddingRight:15,paddingTop:8,paddingBottom:8}} onPress={() => navigation.goBack()}>
                    <Svg
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M19 12H5M12 19l-7-7 7-7"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </Svg>
                </Text>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "column", width: "80%", marginBottom: 23 }}>
                    <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 28 }}>Nova Mercadoria</Text>
                </View>
                <View style={{ flexDirection: "column", width: "80%" }}>
                    <Text style={{ fontFamily: "Ubuntu-Bold" }}>Nome</Text>
                    <TextInput style={{ borderColor: "gray", borderWidth: 1, backgroundColor: "#F5F5F7", width: "100%", marginTop: 10, paddingLeft: 15, borderRadius: 8 }} value={nome} onChangeText={text => setNome(text)} />
                </View>
                <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between", marginTop: 17 }}>
                    <View style={{ width: "48%" }}>
                        <Text style={{ fontFamily: "Ubuntu-Bold" }}>Preco Compra</Text>
                        <TextInput style={{ borderColor: "gray", borderWidth: 1, backgroundColor: "#F5F5F7", width: "100%", marginTop: 10, paddingLeft: 15, borderRadius: 8 }} value={precoCompra} onChangeText={text => setPrecoCompra(text)} />
                    </View>
                    <View style={{ width: "48%" }}>
                        <Text style={{ fontFamily: "Ubuntu-Bold" }}>Preco Venda</Text>
                        <TextInput style={{ borderColor: "gray", borderWidth: 1, backgroundColor: "#F5F5F7", width: "100%", marginTop: 10, paddingLeft: 15, borderRadius: 8 }} value={precoVenda} onChangeText={text => setPrecoVenda(text)} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", width: "80%", marginTop: 18 }}>
                    <Text style={{ backgroundColor: "#2ecc71", color: "white", paddingTop: 8, paddingBottom: 8, paddingLeft: 25, paddingRight: 25, borderRadius: 6, fontSize: 18 }} onPress={() => addMercadoria()}>Salvar</Text>
                </View>
            </SafeAreaView>
        </React.Fragment>
    )
}