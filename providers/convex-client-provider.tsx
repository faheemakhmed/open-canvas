"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { 
    //AuthLoading,
    //Authenticated,
    ConvexReactClient,
 } from "convex/react";

 interface ConvexCLientProviderProps {
    children: React.ReactNode;
 }

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!; //this was the original, next line is just me trying
//const convexUrl = "https://frank-polliwog-16.clerk.accounts.dev"; 

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children,
} : ConvexCLientProviderProps ) =>{
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};