"use client"

import { ClerkProvider, useAuth , SignInButton } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { 
    AuthLoading,
    Authenticated,
    ConvexReactClient,
    Unauthenticated,
 } from "convex/react";

 interface ConvexCLientProviderProps {
    children: React.ReactNode;
 }

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!; 

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children,
} : ConvexCLientProviderProps ) =>{
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <h1>this is  a loading page</h1>
                </AuthLoading> 
                <Unauthenticated>
                    <SignInButton />
                </Unauthenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};