import Image from "next/image";
import Title from "./components/Title";

export const metadata = {
  title: "What is it Really?",
};
export default function Home() {
  return (
    <main className="text-center">
      <Title>Home</Title>
    </main>
  );
}
