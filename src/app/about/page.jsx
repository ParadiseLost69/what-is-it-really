import Image from "next/image";
import Title from "../components/Title";

export const metadata = {
  title: "About | What is it Really?",
};
export default function About() {
  return (
    <main className="text-center">
      <Title>About</Title>
    </main>
  );
}
