import { Link } from "@nextui-org/react";
import "./page.scss";
import Experience from "./ui/Experience/Experience";
import { experiences } from "./data";

export default function Home() {
  return (
    <main>
      <div className="description" id="about">
        <p>
          I am a Senior Data Engineer with a{" "}
          <Link showAnchorIcon href="#">
            Ph.D in Artificial Intelligence
          </Link>
          . I specialize in building solutions at the intersection of three
          domains:
          <em> Web Development</em>, <em>Data Engineering</em>, and
          <em> Smart Contracts</em>. While my core skills are web and data
          focused (+6 years of experience), I am slowly pivoting to
          <em> Blockchain</em> technology (+1 year).
        </p>
        <p>
          I am currently taking a few months off my Data Engineering work to
          focus on Smart Contracts, you will find me regularly participating in
          <em> audits</em> and <em> hackathons</em>. I spend my freetime working
          on my main hobby web3 apps{" "}
          <Link showAnchorIcon href="#">
            Mnemofy
          </Link>
          , and{" "}
          <Link showAnchorIcon href="#">
            Metisify
          </Link>
          , and{" "}
          <Link showAnchorIcon href="#">
            Restricted RPS
          </Link>
          .
        </p>
      </div>

      <section className="parcours" id="experiences">
        {experiences.map((e, i) => {
          return <Experience data={e} key={i} />;
        })}
      </section>
      <section className="parcours" id="projects"></section>
    </main>
  );
}
