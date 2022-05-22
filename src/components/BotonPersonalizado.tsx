import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    texto: string,
    color: string,
    accion: () => void
}

export const BotonPersonalizado = ({ texto, color, accion}: Props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: color,
            padding: 10,
            borderRadius: 8,
            margin: 10
        }}
        onPress={accion}>
            
            
            <Text style={{
                fontSize: 16,
                color: "white"
            }}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}