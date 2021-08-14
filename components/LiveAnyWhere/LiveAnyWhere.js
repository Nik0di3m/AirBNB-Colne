import LiveCard from "./LiveCard"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
const LiveAnyWhere = ({ data }) => {

    return (
        <section>
            <h2 className="text-4xl font-semibold py-8">Zamieszkaj w dowolnym miejscu</h2>
            <div className="flex space-x-4 overflow-x-visible overflow-y-hidden p-2 pb-4 -ml-2 scrollbar scrollbar-thin">
                {data?.map((item) => (
                    <LiveCard image={item.Image} text={item.Text} />
                ))}
            </div>
        </section>
    )
}

export default LiveAnyWhere
