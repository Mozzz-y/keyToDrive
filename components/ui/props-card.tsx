'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

type ProductCardProps = {
id:number;  
name: string;
price: number;
imageSrc: string;
inStock?: boolean;  
description: string;
};

export default function PropsCard({
name, 
price, 
imageSrc, 
inStock, 
description,
}: ProductCardProps) 
{
const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
const [likes, setLikes] = useState(0);
const [isLiked, setIsLiked] = useState(false);
const handleClick = () => {
    if (isLiked) {
    setLikes(likes - 1);
    } else {
    setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
};
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
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-red-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!inStock}
    >
        В корзину
    </button>
    <div>
    <button
    onClick={handleClick}
    className={`px-4 py-2 rounded ${
        isLiked 
        ? 'bg-red-500 text-white' 
        : 'bg-gray-200 text-gray-700'
    }`}
    >
    {isLiked ? '❤️' : '🤍'} {likes}
    </button>
    <button
        onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        className="mt-2 ml-4 text-blue-500 underline"
    >
    {isDescriptionVisible ? 'Скрыть описание' : 'Показать описание'}
    </button>
        {isDescriptionVisible && description && (
        <p className="mt-2 text-gray-500 text-sm">{description}</p>
    )}
    </div>
</div>
);
}
