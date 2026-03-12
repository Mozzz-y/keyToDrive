import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
    return (
    <header className="mt-5  flex flex-row px-8  md:mx-12">
        <nav     className="container mx-auto items-center flex space-x-6 ">
            <div className="flex flex-row items-center gap-1 mr-12">
                <Image src="/header/logo.svg" alt="logo" width={40} height={40}/>
                <p className="font-bold text-xl hidden lg:block">KeyToDrive</p>
            </div>
            <Link href="#" className="hidden md:block">Автопарк</Link>
            <Link href="#" className="hidden md:block">Контакты</Link>
        </nav>
        <nav     className="container mx-auto items-center justify-end flex space-x-12 ">
            <div className="flex flex-row items-center gap-2">
                <Image src="/header/phone.svg" alt="logo"width={24} height={24}/>
                <p className="font-medium text-brand-blue text-nowrap">7 (999) 999 99 99</p>
            </div>
            <button className="bg-secondary-grey px-4 py-2 rounded hidden md:block">Войти</button>
        </nav>
    </header>
    )
}