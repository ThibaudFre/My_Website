import { } from "next/font/google"
import Link from "next/link"
import Style from "../styles/css/layout.css";
import Image from "next/image";
import TFPic from "../public/TF-italic.png"
import { Roboto } from "next/font/google";
import NavBar from "../components/NavBar";

export const metadata = {
  title: 'Fresnay Thibaud DEV',
  description: 'Welcome to my website',
}

const roboto = Roboto({
  subsets: [],
  weight: ["400", "500", "700"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Link href="/">
            <Image
              src={TFPic}
              alt="Logo TF"
            ></Image>
          </Link>

          <NavBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
