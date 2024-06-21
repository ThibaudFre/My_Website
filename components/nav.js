import Link from "next/link";

const Nav = (props) => {
    return <>
        <nav className={props.class}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">My Projects</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/aboutMe">About me</Link></li>
            </ul>
          </nav>
    </>

}

export default Nav;