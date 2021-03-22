import React from "react"

export const formataValor = (valor) => {
    const formated = valor.replace(".",",")
    return formated;
}