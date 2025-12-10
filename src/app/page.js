import Image from "next/image";
import logo from '../../public/assets/logo.png'

export default function Home() {
  return (
    <>
    <h2>this is first application </h2>
    <Image src={logo} width={100} height={100} alt="Logo" />
    </>
  );
}
