import { } from "next/font/google"
import Link from "next/link"
import Style from "../styles/css/layout.css";
import Image from "next/image";
import TFPic from "../public/TF-italic.png"
import { Roboto } from "next/font/google";
import Nav from "../components/nav";

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

          {/*<nav className="horizonNav">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">My Projects</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/aboutMe">About me</Link></li>
            </ul>
          </nav>*/}

          <Nav class="horizonNav Nav"></Nav>
          <Nav class="verticalNav Nav"></Nav>
          <div className="navButton">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
