import Image from "next/image"

const NerbyCards = ({ image, city, time }) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-100 duration-100">
            <div className="relative h-16 w-16">
                <Image src={image.url} layout="fill" alt={image.alt} className="rounded-lg" />
            </div>
            <div>
                <h2 className="font-semibold">{city}</h2>
                <h3 className="text-gray-500">{time}</h3>
            </div>
        </div>
    )
}

export default NerbyCards
