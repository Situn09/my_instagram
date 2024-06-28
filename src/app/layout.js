import { Inter } from "next/font/google";
import "../styles/globals.css";
// import Provider from "./Provider";
import GlobalContextProvider from "@/state/context/GlobalContext";
import { Toaster } from "react-hot-toast";
// import GlobalContext from "@/state/context/GlobalContext";
// import GlobalContextProvider from "@/state/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Instagram",
  description: "created by kcr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Toaster />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
