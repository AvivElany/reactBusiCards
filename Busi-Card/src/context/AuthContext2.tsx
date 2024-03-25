import { jwtDecode } from "jwt-decode"
import React, { createContext, useState } from "react"

interface AuthContextType {
    email: string | null
    isBusiness: boolean
    isAdmin: boolean
    sighIn: () => void
    sighUp: () => void
    sighOut: () => void
}

interface CustomJetPayload {
    isBusiness: boolean
    isAdmin: boolean

}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    
    const [email, setEmail] = useState<null|string>(null)
    const [isBusiness, setIsBusiness] = useState<null|boolean>(null)
    const [isAdmin, setIsAdmin] = useState<null | boolean>(null)
    
    const sighIn = async(email: string, password:string) => {
        try { 
            const response = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email, password})
            })
            console.log('Response: ', response);
            
            const data = await response.text()
            console.log('data= ', data);

            if (!response.ok) throw new Error(data)

            const decoded = jwtDecode<CustomJetPayload>(data)
            console.log(decoded);

            setEmail(email)
            setIsBusiness(decoded.isBusiness)
            setIsAdmin(decoded.isAdmin)
            
        } catch (err) {
            const errMessage = (err as Error).message
            console.log(errMessage);
            
        }
    }

    const sighOut = () => {
        setEmail(null)
        setIsBusiness(false)
        setIsAdmin(false)
    }




    return (
        <>
        <AuthContext.Provider value={{ email, isBusiness, isAdmin, sighIn, sighOut }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
