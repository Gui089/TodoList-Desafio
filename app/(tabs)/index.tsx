import { HomeScreen } from "@/screens/Home"
import React from "react"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <>
       <StatusBar backgroundColor={'#000'}/>
       <HomeScreen />
    </>
  )
}

