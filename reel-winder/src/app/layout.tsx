import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Reel Winder",
  description: "Reel Winder - A reel upload and management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <header className="w-full bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">Reel Winder</h1>
              <SignedOut>
                <div className="flex justify-center items-center">
                  <SignInButton>
                    <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-200">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main className="w-full flex-1 flex justify-center items-center p-6">
            <SignedOut>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Welcome to Reel Winder
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  Please sign in to continue
                </p>
                <div className="flex justify-center">
                  <SignInButton>
                    <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-200">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </div>
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </main>
          <footer className="w-full bg-gray-200 p-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Reel Winder. All rights reserved.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
