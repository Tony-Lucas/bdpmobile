import React, { useState } from "react"
import { Text, View ,Platform} from "react-native"
import LoadingTime from "../Utilitarios/LoadingTime"
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {calcula} from "./Calculos";

export default function Resumo() {

    const [showData, setShowData] = useState(true)
    const [total,setTotal] = useState(0.00)

    useFocusEffect(
        React.useCallback(() => {
            
            const getData = async () => {
                const data = new Date()
                const totalHoje = await calcula(data,data)
                setTotal(totalHoje)
            }

            getData()
            return () => {
                setTotal(0.00)
            };
        }, [])
    );

    return (

        <View style={{ flex: 1, flexDirection: "column", alignItems: "center" ,paddingTop:15 }}>
            <View style={{ width: "82%", marginTop: 10, marginBottom: 18 }}>
                <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 28 }}>Resumo</Text>
            </View>
            <View style={{ width: "82%", backgroundColor: "gray", height: 2 }}>
                {null}
            </View>
            {showData && (
                <View style={{ width: "82%", marginTop: 20, flexDirection: "row" }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{ fontFamily: "Ubuntu-Regular", fontSize: 22 }}>Lucro</Text>
                        <Text style={{ marginTop: 12, fontFamily: "Ubuntu-Bold", fontSize: 23, color: "#546DE5" }}>{"R$ 1333,64"}</Text>
                    </View>
                    <View style={{ width: "50%", flexDirection: "column"}}>
                        <Text style={{fontFamily: "Ubuntu-Regular", fontSize: 22, color: "black" ,textAlign:"right"}}>Total</Text>
                        <Text style={{marginTop: 12, fontFamily: "Ubuntu-Bold", fontSize: 23, color: "#546DE5" ,textAlign:"right"}}>{total.toFixed(2)}</Text>
                    </View>
                </View>
            )}
            {!showData && (
                <LoadingTime />
            )}
        </View>
    )
}