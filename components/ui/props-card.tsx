import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
id:number
name: string;
price: number;
imageSrc: string;
inStock?: boolean;     // ← необязательный пропс
};

export default function PropsCard({
id,
name, 
price, 
imageSrc, 
inStock = true         // ← значение по умолчанию
}: ProductCardProps) {
return (
    <div className="border rounded-lg p-4">
    <div className="relative w-full h-48 mb-4">
        <Image 
        src={imageSrc}
        alt={name}
        fill
        className="object-cover rounded"
        />
    </div>
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-gray-600">{price.toLocaleString()} ₽</p>
      {/* Отображение наличия */}
    <p className={inStock ? 'text-green-600' : 'text-red-600'}>
        {inStock ? 'В наличии' : 'Нет в наличии'}
    </p>
      {/* Кнопка неактивна, если товара нет */}
    <button 
        className={`mt-2 px-4 py-2 rounded w-full ${
        inStock 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!inStock}
    >
        В корзину
    </button>
    </div>
);
}
