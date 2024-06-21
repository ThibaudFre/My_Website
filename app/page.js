import Style from "../styles/css/home.css"
import Image from "next/image"
import computeImg from "../public/computer_img.jpg"

export default function Page() {
  return <>
    <main>
      <section className="img_welcome_container">
        <Image src={computeImg} alt="image of a computer on a desk"></Image>
        <div>
          <h1>Welcome to my Website !</h1>
        </div>
      </section>
    </main>

  </>
}