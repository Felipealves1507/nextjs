import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/image.png"
        alt="Logo da empresa"
        width={200}
        height={80}
        className="w-auto h-60"
        priority
      />
      <span className="sr-only">Sua Empresa</span>
    </>
  );
}
