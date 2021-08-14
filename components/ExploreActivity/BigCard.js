import Image from "next/image"

const BigCard = ({ image, title, desc }) => {
    return (
        <div className="cursor-pointer hover:scale-105 duration-300 ease-out">
            <div className="h-[450px] w-[450px] relative">
                <Image src={image.url} alt={image.alt} layout="fill" className="rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mt-3">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default BigCard
