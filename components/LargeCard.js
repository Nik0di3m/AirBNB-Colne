import Image from "next/image"

const LargeCard = ({ img, title, desc, buttonText }) => {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative min-w-[300px] h-96">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
                <p className="md:w-96">{desc}</p>
                <button className="text-xl text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 font-semibold">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
