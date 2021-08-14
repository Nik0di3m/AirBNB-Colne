import Image from "next/image"

const LiveCard = ({ image, text }) => {
    return (
        <div className="cursor-pointer hover:scale-105 duration-300 ease-out">
            <div className="h-80 w-80 relative">
                <Image src={image.url} alt={image.alt} layout="fill" className="rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mt-3">{text}</h3>
        </div>
    )
}

export default LiveCard
