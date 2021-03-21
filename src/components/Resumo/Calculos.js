import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react"

export const calcula = async (inicio,fim) => {
    const token = await AsyncStorage.getItem("token")
    const resultNotas = await fetch(`https://baldosplasticosapi.herokuapp.com/notas/${inicio}/${fim}/${token}`);
    const jsonNotas = await resultNotas.json();
    let total = 0
    let lucro = 0;
    let notas = jsonNotas.notas.length
    jsonNotas.notas.forEach(async(item) => {
        total = total + item.total
        const resultVendas = await fetch(`https://baldosplasticosapi.herokuapp.com/vendas/${item.id}/${token}`);
        const jsonVendas = await resultVendas.json()
        
    })
    
    return total
}

