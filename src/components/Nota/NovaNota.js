import React from "react"
import { SafeAreaView, Text, TextInput, View } from "react-native"

export default function NovaNota({ navigation }) {
    return (
        <SafeAreaView style={{ flexDirection: "column", backgroundColor: "#fff", flex: 1, alignItems: "center", paddingTop: 18 }}>
            <View style={{ width: "82%", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center", color: "#fff",marginTop:10 }}>
                <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 28,color:"black" }}>PDV</Text>
                <Text style={{ paddingTop: 8, paddingBottom: 8, paddingLeft: 15, paddingRight: 15, backgroundColor: "#e74c3c", borderRadius: 5 ,color: "#fff"}}>Deletar</Text>
            </View>
            <View style={{ width: "82%", marginTop: 20}}>

                <TextInput style={{ borderWidth: 3, borderColor: "#B1C3D4", backgroundColor: "#fff", borderStyle: "solid", fontFamily: "Ubuntu-Regular", borderRadius: 6, paddingLeft: 14 }} placeholder="Nome do cliente" />
            </View>
        </SafeAreaView>
    )
}