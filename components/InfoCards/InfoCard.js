import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
const InfoCard = ({ location, desc, title, price, star, image }) => {
    return (
        <div className="flex flex-col lg:flex-row border-b py-7 px-2 cursor-pointer mb-5 shadow-sm hover:shadow-lg hover:opacity-80 duration-200 first:border-t">
            <div className="relative h-56 w-full md:h-52 md:w-80 flex-shrink-0">
                <Image src={image.url} alt={image.alt} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>

            <div className="flex flex-col justify-between py-2 flex-grow pl-5">
                <div>
                    <div className="flex justify-between">
                        <p>{location}</p>
                        <HeartIcon className="h-7 cursor-pointer" />
                    </div>
                    <h4 className="text-xl">{title}</h4>
                    <div className="border-b w-10 pt-2" />
                    <p>
                        {desc}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <StarIcon className="h-6 text-red-400" />
                        <p>{star}</p>
                    </div>
                    <div>
                        <h4 className="text-lg lg:text-2xl font-semibold">{price}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
