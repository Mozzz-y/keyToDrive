import Link from "next/link";
import Image from "next/image";

export default function MainFooter() {
    return (
    <footer className="text-footer-text">
        <div className="bg-secondary-grey py-10 flex md:flex-row  flex-col justify-center items-center gap-23 px-8">
            <p className="md:order-first order-last">© 2023-2024 ООО “KeyToDrive”</p>
            <p className="text-center">Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</p>
            <div className="flex flex-row gap-6 md:order-last order-first">
            <Link href="#" className="">Автопарк</Link>
            <Link href="#" className="">Контакты</Link>
            </div>
        </div>
        <div className="container mx-auto flex flex-row justify-center gap-4 mt-4 md:hidden">
            <Link href="#" className="flex flex-col items-center ">
                    <Image src="/footer/home.svg" alt="logo"width={24} height={24}/>
                    <p>Главная</p>
            </Link>
            <Link href="#" className="flex flex-col items-center">
                <Image src="/footer/truck.svg" alt="logo"width={24} height={24}/>
                <p>Автопарк</p>
            </Link>
            <Link href="#" className="flex flex-col items-center">
                <Image src="/footer/navigation.svg" alt="logo"width={24} height={24}/>
                <p>Контакты</p>
            </Link>
            <Link href="#" className="flex flex-col items-center ">
                <Image src="/footer/user.svg" alt="logo"width={24} height={24}/>
                <p>Профиль</p>
            </Link>
        </div>
    </footer>
    )
}