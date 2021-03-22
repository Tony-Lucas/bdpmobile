import React from "react"
import { SafeAreaView ,View , Text, TextInput} from "react-native"

export default function DetalheMercadoria(props,{navigation}){
    return(
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",position:"absolute",width:"100%",height:"100%",backgroundColor:"gray"}}>
            <View style={{flexDirection:"column",backgroundColor:"#fff",width:"82%",paddingLeft:18,paddingRight:18,paddingTop:15,borderRadius:8,paddingBottom:15}}>
                <View style={{flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{fontFamily:"Ubuntu-Bold",marginTop:15,marginBottom:15}}>{props.mercadoria.nome}</Text>
                <Text style={{fontFamily:"Ubuntu-Regular"}}>Total: </Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <TextInput placeholder="Desconto" style={{fontFamily:"Ubuntu-Regular",width:"50%"}}/>
                    <TextInput placeholder="Quantidade" style={{fontFamily:"Ubuntu-Regular",width:"50%"}}/>
                </View>
                <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:15}}>
                    <Text style={{fontFamily:"Ubuntu-Regular",backgroundColor:"#546de5",width:"33%",paddingTop:7,paddingBottom:7,textAlign:"center",color:"#fff",borderRadius:5}}>Confirmar</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}