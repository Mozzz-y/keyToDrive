import Image from "next/image";
import ProductCard from "@/components/ui/product-card";
import WarningCard from "@/components/ui/warning-card";
export default function Home() {
  return (

    <main className="flex flex-col">

        <div className=" h-175 bg-cover bg-no-repeat bg-center bg-[url(/main/map.svg)] ">
          
          <div className="mt-15 md:mt-25 font-secondary container mx-auto flex flex-col gap-6 items-center text-center">
            <p className="font-bold text-5xl md:text-6xl ">Самый большой автопарк Москвы</p>
            <p className="md:mx-0 mx-2">Мы предлагаем аренду автомобилей, которые идеально подойдут для любых вкусов и предпочтений. У на
              с вы найдете авто для любой ситуации и настроения, от экономичных до роскошных моделей. 
              Наслаждайтесь комфортом и свободой передвижения с нашей широкой линейкой транспортных средств.</p>
            <button className="font-primary font-medium bg-brand-blue text-theme-white px-12 py-2 rounded-lg">Начать пользоваться</button>
            <Image src="/main/sportcar.svg" alt="car" className="z-50 w-430px md:w-1181px h-241px md:h-664px -mt-0 md:-mt-10" width={1181} height={664 }/>
          </div>
        </div>

        <div className="w-full bg-secondary-grey py-15 md:py-20">
          <p className="block md:hidden font-bold text-4xl text-nowrap text-center mt-4 md:mt-0">Новые автомобили</p>
          <div className="mt-12 flex flex-row gap-6 md:justify-center  justify-start overflow-x-auto">
            <div className="ml-2 md:ml-0">
            < ProductCard/>
            </div>
            <div className="mr-2 md:mr-0">
            < ProductCard/>
            </div>
            <div className="hidden lg:block">
            < ProductCard/>
            </div>
            <div className="hidden lg:block">
            < ProductCard/>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-10 my-15 md:my-20">
          <p className=" text-4xl md:text-5xl text-bold">Наши преимущества</p>
          <div className="md:grid md:grid-cols-3 flex flex-row gap-6 overflow-x-auto">
            <WarningCard/>
            <div className="flex flex-col border-2 rounded-lg border-secondary-grey p-6 gap-6">
              <Image src="/main/clock.svg" alt="clock" className="" width={40} height={40}/>
              <div className="flex flex-col gap-4">
                <p className="text-bold text-2xl">Поддержка 24-часа</p>
                <p className="text-footer-text">Мы доступны 24/7, чтобы помочь вам в любое время дня и ночи.</p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded-lg border-secondary-grey p-6 gap-6 ">
              <Image src="/main/mapAdvantages.svg" alt="map" className="" width={40} height={40}/>
              <div className="flex flex-col gap-4">
                <p className="text-bold text-2xl">Удобное расположение</p>
                <p className="text-footer-text">Наши точки аренды находятся в удобных локациях по всему городу, включая аэропорты и железнодорожные станции.</p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded-lg border-secondary-grey p-6 gap-6 ">
              <Image src="/main/clipboard.svg" alt="board" className="" width={40} height={40}/>
              <div className="flex flex-col gap-4">
                <p className="text-bold text-2xl">Страховка на случай ДТП</p>
                <p className="text-footer-text">Каждый арендуемый автомобиль защищён страховкой от ДТП, покрывающей основные риски.</p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded-lg border-secondary-grey p-6 gap-6 ">
              <Image src="/main/refresh.svg" alt="refresh" className="" width={40} height={40}/>
              <div className="flex flex-col gap-4">
                <p className="text-bold text-2xl">Экономьте до 50% на дальних поездках</p>
                <p className="text-footer-text">Используйте наши специальные тарифы для длительных поездок и экономьте до 50%.</p>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded-lg border-secondary-grey p-6 gap-6 ">
              <Image src="/main/cansel.svg" alt="cansel" className="" width={40} height={40}/>
              <div className="flex flex-col gap-4">
                <p className="text-bold text-2xl">Бесплатная отмена за 48 часов</p>
                <p className="text-footer-text">Предоставляем возможность бесплатной отмены брони за 48 часов до начала аренды.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-secondary-grey px-0 md:px-12 md:py-20 py-15 flex">
          <div className="container mx-auto flex flex-col gap-10">
            <p className=" font-bold text-4xl text-nowrap flex justify-center md:justify-start  mb-10">Автопарк</p>
            <div className="lg:grid lg:grid-cols-4 flex flex-row gap-6 overflow-x-auto">
              <div className="">
              < ProductCard/>
              </div>
              <div className="">
              < ProductCard/>
              </div>
              <div className="">
              < ProductCard/>
              </div>
              <div className="">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
              <div className="hidden lg:block">
              < ProductCard/>
              </div>
            </div>
            <div className="flex justify-center">
            <button className="font-primary font-medium bg-brand-blue text-theme-white px-12 py-2 rounded-lg">Смотреть все</button>
            </div>
        </div>
        </div>
        
        <div className="px-12 py-20">
            <div className=" rounded-lg bg-secondary-grey md:py-[69px] md:px-[172px] hidden md:block">
              <div className="flex justify-center text-center flex flex-col gap-6">
                <p className="text-bold text-5xl">Не нашли ответы на свои вопросы ?</p>
                <p className="text-footer-text">Наши специалисты готовы ответить на все ваши вопросы по аренде авто 🚗💬! Свяжитесь с нами через
                  форму ниже или позвоните, чтобы получить консультацию и выбрать идеальный автомобиль. Мы здесь, чтобы помочь!</p>
                <div>
                  <button className=" font-primary font-medium bg-brand-blue text-theme-white px-12 py-2 rounded-lg">Задать вопрос</button>
                </div>
              </div>
            </div>
            <div className="block md:hidden flex justify-center text-center flex flex-col gap-6">
              <p className="text-bold text-5xl">Не нашли ответы на свои вопросы ?</p>
              <p className="text-footer-text">Наши специалисты готовы ответить на все ваши вопросы по аренде авто 🚗💬! Свяжитесь с нами через
              форму ниже или позвоните, чтобы получить консультацию и выбрать идеальный автомобиль. Мы здесь, чтобы помочь!</p>
              <div>
                <button className=" font-primary font-medium bg-brand-blue text-theme-white px-12 py-2 rounded-lg">Задать вопрос</button>
              </div>
            </div>
        </div>
      </main>
  );
}
