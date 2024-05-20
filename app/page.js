import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/pic.png" width={500} height={500} alt="Picture"></Image>
    </main>
  );
}
