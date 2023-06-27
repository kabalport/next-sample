import Link from "next/link";
import './globals.css';
import {ThemeProvider} from "styled-components";
import {theme} from "@/app/theme";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head />
        <body>
        <div className="navbar">
            <Link href="/">Home</Link>
            <Link href="/list">List</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
        </div>
        {children}
        </body>

        </html>
    )
}