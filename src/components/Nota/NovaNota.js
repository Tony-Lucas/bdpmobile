import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState } from "react"
import { SafeAreaView, Text, TextInput, View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { formataValor } from "../Utilitarios/formataDados";
import DetalheMercadoria from "./DetalheMercadoria";

export default function NovaNota({ navigation }) {

    const [nomeCliente, setNomeCliente] = useState()
    const [mercadoriaBusca, setMercadoriaBusca] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [pesquisa, setPesquisa] = useState("")
    const [focusedMercadoria,setFocusedMercadoria] = useState()

    const procuraMercadoria = async (text) => {
        setPesquisa(text)
        if (text.length > 2) {
            const token = await AsyncStorage.getItem("token")
            const result = await fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/busca/${text}/${await token}`)
            const json = await result.json()
            setMercadoriaBusca(json.mercadorias)
        } else if (text.length < 2 && text.length == 0) {
            setMercadoriaBusca([])
        }
    }

    const addCarrinho = (mercadoria) => {
        setCarrinho(carrinho.concat(mercadoria))
        setPesquisa("")
        console.log(mercadoria)
    }

    const detalheVenda = (mercadoria) => {
        setFocusedMercadoria(mercadoria)
    }

    return (
        <React.Fragment>
            <SafeAreaView style={{ flexDirection: "column", backgroundColor: "#fff", flex: 1, alignItems: "center", paddingTop: 18 }}>
                <View style={{ width: "82%", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center", color: "#fff", marginTop: 10 }}>
                    <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 28, color: "black" }}>PDV</Text>
                    <Text style={{ paddingTop: 8, paddingBottom: 8, paddingLeft: 15, paddingRight: 15, backgroundColor: "#e74c3c", borderRadius: 5, color: "#fff" }}>Cancelar</Text>
                </View>
                <View style={{ width: "82%", marginTop: 20 }}>
                    <Text style={{ fontSize: 22, marginBottom: 17, fontFamily: "Ubuntu-Bold" }}>Cliente</Text>
                    <TextInput onChangeText={text => setNomeCliente(text)} style={{ borderWidth: 3, borderColor: "#B1C3D4", backgroundColor: "#fff", borderStyle: "solid", fontFamily: "Ubuntu-Regular", borderRadius: 6, paddingLeft: 14 }} placeholder="Nome do cliente" />
                    <Text style={{ fontSize: 22, marginBottom: 17, fontFamily: "Ubuntu-Bold", marginTop: 15 }}>Adiciona Mercadoria</Text>
                    <TextInput value={pesquisa} onChangeText={text => procuraMercadoria(text)} style={{ borderWidth: 3, borderColor: "#B1C3D4", backgroundColor: "#fff", borderStyle: "solid", fontFamily: "Ubuntu-Regular", borderRadius: 6, paddingLeft: 14 }} placeholder="Procurar Mercadoria" />
                    <View style={{ flexDirection: "column" }}>
                        <View style={{
                            position: "absolute", backgroundColor: "#fff", width: "100%", shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            zIndex: 0
                        }}>

                            {mercadoriaBusca && pesquisa.length > 2 && (
                                mercadoriaBusca.map(item => {
                                    return (

                                        <View style={{ width: "100%", paddingLeft: 14, paddingRight: 14, paddingTop: 20, paddingBottom: 20, flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center" }}>
                                            <View>
                                                <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 17 }}>{item.nome}</Text>
                                                <Text style={{ fontFamily: "Ubuntu-Regular", marginTop: 8 }}>{formataValor(item.precoVenda)}</Text>
                                            </View>
                                            <View>
                                                <Text onPress={() => detalheVenda(item)} style={{ padding: 10 }}>
                                                    <Svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <Path
                                                            d="M21 16H7a1 1 0 010-2h10.44a3 3 0 002.91-2.27L22 5.24a1 1 0 00-.18-.86A1 1 0 0021 4H6.76a3 3 0 00-2.82-2H3a1 1 0 000 2h.94a1 1 0 011 .76l.06.48L6.73 12A3.003 3.003 0 107 18h.18a3 3 0 105.64 0h2.36a3 3 0 105.64 0H21a1 1 0 000-2zM19.72 6l-1.31 5.24a1 1 0 01-1 .76H8.78l-1.5-6h12.44zM10 20a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"
                                                            fill="#000"
                                                        />
                                                    </Svg>
                                                </Text>
                                            </View>
                                        </View>

                                    )
                                })
                            )}
                        </View>
                    </View>
                </View>
                <View style={{ width: "82%", marginTop: 20 }}>
                    <Text style={{ fontSize: 22, marginBottom: 17, fontFamily: "Ubuntu-Bold", textAlign: "center" }}>Carrinho</Text>
                    {carrinho && (
                        carrinho.map(item => {
                            return (
                                <View>
                                    <Text style={{ fontSize: 16 }}>{item.nome}</Text>
                                </View>
                            )
                        })
                    )}
                </View>

            </SafeAreaView>
            {focusedMercadoria && (
                <DetalheMercadoria mercadoria={focusedMercadoria}/>
            )}
        </React.Fragment>
    )
}