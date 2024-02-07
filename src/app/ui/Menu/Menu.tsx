"use client";

import "./Menu.scss";
import { Button, Link } from "@nextui-org/react";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

import useScrollspy from "@/app/hooks/useScrollspy";

const sections = [
  { id: "about", text: "About" },
  { id: "experiences", text: "Experience" },
  { id: "projects", text: "Personal Projects" },
];

type Props = {};

const Menu: React.FC<Props> = ({}) => {
  const activeId = useScrollspy(
    sections.map((s) => s.id),
    200
  );
  return (
    <header className="menu-container">
      <div className="info">
        <div className="name">
          Abdel<strong>Raouf</strong> Hecham
        </div>
        <div className="title">
          Senior <em>Data Engineer</em> & <br />
          Fullstack <em>Smart Contracts </em>
          Developer
        </div>
        <div className="subtitle">
          I build and design web3 solutions that <br /> leverage the power of
          data.
        </div>
      </div>
      <div className="socials">
        <Button
          as={Link}
          isIconOnly
          variant="light"
          color="primary"
          href="https://github.com/raouf2ouf"
        >
          <FaGithub />
        </Button>
        <Button
          as={Link}
          isIconOnly
          variant="light"
          color="primary"
          href="https://www.linkedin.com/in/abdelraouf-hecham/"
        >
          <FaLinkedin />
        </Button>
        <Button as={Link} isIconOnly variant="light" color="primary" href="">
          <FaStackOverflow />
        </Button>
        <Button as={Link} isIconOnly variant="light" color="primary" href="">
          <FaTwitter />
        </Button>
      </div>
      <div className="navigation hide-lg">
        {sections.map((s) => {
          return (
            <Button
              onClick={() =>
                document
                  .getElementById(s.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="light"
              color="primary"
              radius="none"
              className={s.id == activeId ? "active" : ""}
              key={s.id}
            >
              <div className="label">{s.text}</div>
            </Button>
          );
        })}
      </div>
    </header>
  );
};

export default Menu;
