import Image from "next/image"
export default function ProductCard() {
    return (
    <div className="rounded-lg bg-theme-white flex flex-col gap-6 w-[318px] " >
        <Image src="/main/photo.svg" alt="logo"width={318} height={280}/>
        <div className="mx-6 flex flex-col gap-4">
            <p className="text-bold">Name</p>
            <div className="text-footer-text">
                <p>Двигатель: </p>
                <p>Год: </p>
                <p>Привод: </p>
                <p>Коробка: </p>
            </div>
        </div>
        <Image src="/main/line.svg" alt="logo"width={318} height={2}/>
        <div className="flex flex-row pb-4">
        <p className="mx-6 text-bold text-nowrap">от 20 000 ₽</p>
        <p className="-mx-3">/ сутки</p>
        </div>
    </div>
    )
}