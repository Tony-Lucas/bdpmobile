import React from "react";
import { Text,View } from "react-native";

export default function Nota({navigation}){
    return(
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center" ,paddingTop:18}}>
            <View style={{ width: "82%", marginTop: 10, marginBottom: 18 ,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text style={{ fontFamily: "Ubuntu-Light", fontSize: 28 }}>Notas</Text>
                <Text style={{backgroundColor:"#546DE5",fontSize:19,paddingLeft:10,paddingRight:10,paddingTop:6,paddingBottom:6,color:"#fff",borderRadius:5}} onPress={() => navigation.navigate("NovaNota")}>Nova</Text>
            </View>
            <View style={{ width: "82%", backgroundColor: "gray", height: 2 }}>
                {null}
            </View>
            
        </View>
    )
}