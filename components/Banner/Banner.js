import Image from "next/image"

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="/banner.webp" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="font-semibold text-lg">
                    Nie wiesz, dokąd pojechać? Świetnie się składa.
                </p>
                <button className="bg-white px-10 py-4 shadow-md 
                rounded-full font-bold my-3 hover:shadow-xl duration-200 active:scale-90">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400">Elastyczne wyszukiwanie</p>
                </button>
            </div>
        </div>
    )
}

export default Banner
