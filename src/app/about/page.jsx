import Image from "next/image";
import Title from "../components/Title";

export const metadata = {
  title: "About | What is it Really?",
};
export default function About() {
  return (
    <main className="text-center">
      <Title>About</Title>
      <p className="text-2xl my-2 text-left">
        Have you ever wanted to know more about how technology{" "}
        <span className="text-red-400">works</span>?
      </p>
      <p className="text-2xl my-2 text-left">
        How do cameras <em>really</em> work? What is HTML? Why does my credit
        card work at some places but not others?
      </p>
      <p className="text-2xl my-2 text-left">
        <em>
          What is it <span className="text-red-400">Really</span>
        </em>
        ? is the podcast where we dive into the technology that has shaped the
        world.{" "}
      </p>
      <p className="text-2xl my-2 text-left">
        We uncover the inner workings of formative tech.
      </p>
      <p className="text-2xl my-2 text-left">
        And we try to unravel the mystery of where it could possibly go from
        here.
      </p>
    </main>
  );
}
