import Image from "next/image"; 
export default function WarningCard() {
    return (
    <div className="flex flex-col border-2 rounded-lg border-secondary-grey p-6 gap-6">
    <Image src="/main/warning.svg" alt="warning" className="" width={40} height={40}/>
    <div className="flex flex-col gap-4">
        <p className="text-bold text-2xl">Новые автомобили</p>
        <p className="text-footer-text">Все наши автомобили — новейшие модели, обеспечивающие комфорт и безопасность на дорогах.</p>
    </div>
    </div>
)
}