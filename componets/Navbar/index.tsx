import Link from "next/link";
import Image from 'next/image';
import avatar from "@/assents/img/images.jpg"
export default function Navbar() {
    return (
        <>
            <nav className=" flex  flex-row  h-10 bg-white  w-screen justify-between">
                <Image className="rounded-full"
                    src={avatar}
                    width={100}
                    height={100}
                    alt="Foto de perfil" />
                <ul className="flex flex-row p-[15px] w-64 justify-between ">
                    <li className="p-4">
                        <Link href="/">Pagina Principal</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/pages/link">Link 01</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/pages/link2">LInk 02 </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}