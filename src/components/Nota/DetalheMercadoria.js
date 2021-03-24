import React, { useState } from "react"
import { SafeAreaView, View, Text, TextInput } from "react-native"
import { set } from "react-native-reanimated"
import * as Animatable from 'react-native-animatable';

export default function DetalheMercadoria(props, { navigation }) {

    const [quantidade, setQuantidade] = useState("1")
    const [total, setTotal] = useState((quantidade * props.mercadoria.precoVenda).toFixed(2))
    const [desconto, setDesconto] = useState('')

    const calculaQuantidade = (text) => {
        setQuantidade(text)
        if (!text && !desconto) {
            setTotal(parseFloat(props.mercadoria.precoVenda).toFixed(2))
        } else if (!desconto && text) {

            setTotal(parseInt(text) * parseFloat(props.mercadoria.precoVenda))
        } else if (desconto && text) {

            setTotal((parseInt(text) * parseFloat(desconto)).toFixed(2))
        } else if (!text && desconto) {
            setTotal(parseFloat(desconto).toFixed(2))
        }
    }

    const calculaDesconto = (text) => {
        setDesconto(text)
        if (!quantidade && !text) {
            setTotal(parseFloat(props.mercadoria.precoVenda).toFixed(2))
        } else if (text && quantidade) {
            setTotal((parseFloat(text.replace(",", ".")) * parseInt(quantidade)).toFixed(2))
        } else if (!text && quantidade) {
            setTotal(parseInt(quantidade) * props.mercadoria.precoVenda)
        }
    }

    const addCarrinho = () => {
        const mercadoria = {id:props.mercadoria.id, nome: props.mercadoria.nome, precoVenda: props.mercadoria.precoVenda, quantidade: quantidade || 1, desconto: desconto || 0 ,total:total}
        props.adicionaCarrinho(mercadoria)
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(149, 165, 166,0.5)" }}>
            <Animatable.View animation="bounceInRight" duration={1500} style={{ flexDirection: "column", backgroundColor: "#fff", width: "82%", paddingLeft: 18, paddingRight: 18, paddingTop: 15, borderRadius: 8, paddingBottom: 15 }}>
                <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Ubuntu-Bold", marginTop: 15, marginBottom: 15, fontSize: 17 }}>{props.mercadoria.nome}</Text>
                    <Text style={{ fontFamily: "Ubuntu-Regular" }}>Total: {total}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TextInput onChangeText={text => calculaDesconto(text)} placeholder="Desconto" style={{ fontFamily: "Ubuntu-Regular", width: "50%" }} />
                    <TextInput value={quantidade} onChangeText={text => calculaQuantidade(text)} placeholder="Quantidade" style={{ fontFamily: "Ubuntu-Regular", width: "50%" }} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 20 }}>
                <Text onPress={() => props.showOffDetalhe()} style={{ fontFamily: "Ubuntu-Regular", backgroundColor: "#e74c3c", width: "33%", paddingTop: 7, paddingBottom: 7, textAlign: "center", color: "#fff", borderRadius: 5 ,marginRight:20}}>Cancelar</Text>
                    <Text onPress={() => addCarrinho()} style={{ fontFamily: "Ubuntu-Regular", backgroundColor: "#546de5", width: "33%", paddingTop: 7, paddingBottom: 7, textAlign: "center", color: "#fff", borderRadius: 5 }}>Confirmar</Text>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}