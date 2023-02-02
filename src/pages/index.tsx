import ParticleComponent from "@/components/ParticleComponent";
import {
  faTwitter,
  faReddit,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main>
      <div >
        <ParticleComponent />
        <div className="homeContainer">
          <h1 className="smallHeadingPrimary colorSecondary">
            👋 Hello there, my name is
          </h1>
          <h1
            className="superTitlePrimary colorPrimary"
            data-text="Vignesh Marimuthu"
          >
            Vignesh Marimuthu
          </h1>

          <div className="flex flex-jc-start">
            <a
              href="/personal"
              className="personal-link buttonText colorSecondary"
            >
              Personal →
            </a>
            <a
              href="/professional"
              className="personal-link buttonText colorSecondary"
            >
              Professional →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
