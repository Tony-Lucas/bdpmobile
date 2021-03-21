import React,{useState} from "react"
import { SafeAreaView, Text ,TextInput,View} from "react-native";
import Svg, { Path } from "react-native-svg"
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}){

    const [usuario,setUsuario] = useState()
    const [senha,setSenha] = useState()
    const [showErro,setShowErro] = useState()

    const doLogin = async () => {
        if(usuario && senha){
            const result = await fetch("https://baldosplasticosapi.herokuapp.com/login",{
                method:"POST",
                headers:{'content-type': 'application/json'},
                body:JSON.stringify({usuario:usuario,senha:senha})
            })
            const json = await result.json()
            if(!json.success){
                setShowErro(true)
                setTimeout(() => {
                    setShowErro(false)
                },2500)
            }else{
                await AsyncStorage.setItem('token', json.token);
                navigation.navigate("Navigator")
            }
        }
    }

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{width:"67%"}}>
                <Text style={{fontFamily:"Ubuntu-Bold",fontSize:29}}>Bem Vindo</Text>
                <View style={{marginTop:28}}>
                    <TextInput placeholder="Usuario" style={{borderBottomColor:"gray",borderBottomWidth:1,fontFamily:"Ubuntu-Regular"}} value={usuario} onChangeText={text => setUsuario(text)}/>
                    <TextInput placeholder="Senha" style={{borderBottomColor:"gray",borderBottomWidth:1,marginTop:15,fontFamily:"Ubuntu-Regular"}} value={senha} onChangeText={text => setSenha(text)} secureTextEntry={true}/>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",flexWrap:"wrap",marginTop:28}}>
                    
                    <View style={{width:"50%"}}>
                        {showErro && (
                            <Animatable.Text animation="bounceInLeft" duration={1500} style={{backgroundColor:"#DF1125",fontFamily:"Ubuntu-Regular",color:"white" ,textAlign:"center",paddingTop:8,paddingBottom:8,borderRadius:5}}>Dados Incorretos</Animatable.Text>
                        )}
                    </View>
                    
                    <View style={{width:"50%"}}>
                    <Text style={{backgroundColor:"#546de5",padding:15,borderRadius:100,alignSelf:"flex-end"}} onPress={() => doLogin()}>
                        <Svg
                            width={32}
                            height={32}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <Path
                                d="M5 12h14M12 5l7 7-7 7"
                                stroke="#fff"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                    </Text>
                    </View>
                    
                </View>
            </View>
            
        </View>
    )
}