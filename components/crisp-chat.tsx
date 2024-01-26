"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("16396086-f475-4df5-949f-5b0a0769e966")
    }, [])

    return null
}