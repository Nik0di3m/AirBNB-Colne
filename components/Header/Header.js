import Image from "next/image"
import {
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    GlobeAltIcon,
} from "@heroicons/react/solid"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";
import fetchAPI from "../Utils/api"

const Header = ({ placeholder }) => {

    const [input, setInput] = useState("")
    const [inputUp, setInputUp] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guestNumber, setGuestNamber] = useState(1)
    const router = useRouter()

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const search = () => {
        if(input != null){
            const upperInputstr = input.charAt(0).toUpperCase() + input.slice(1)
            router.push({
                pathname: '/search',
                query: {
                    location: upperInputstr,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuest: guestNumber
                }
            })
        }

        setInput()
    }


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }


    return (
        <header className="sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md md:px-10">
            {/* Left nav */}
            <div
                onClick={() => router.push("/")}
                className="relative flex h-10 items-center cursor-pointer my-auto">
                <Image
                    src="/logoAirbnb.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt="LogoAirBNB"
                />
            </div>
            {/* Middle nav */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className="flex-grow capitalize pl-5 bg-transparent outline-none w-full md:w-[85%] text-sm text-gray-600 placeholder-gray-400"
                    placeholder={placeholder || "Rozpocznij wyszukiwanie"} />
                <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
            {/* Right nav */}
            <div className="flex items-center justify-end space-x-4 text-gray-600">
                <p className="hidden md:flex cursor-pointer">Zostań gospodarzem</p>
                <GlobeAltIcon className="h-6 cursor-pointer " />
                <div className="flex space-x-2 border-2 rounded-full items-center p-2 shadow-sm hover:shadow-md duration-200 cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {input && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center justify-between mb-8 border-b-2">
                        <h2 className="font-semibold text-2xl flex-grow">Liczba Gości</h2>
                        <UsersIcon className="h-6 text-gray-700" />
                        <input type="number" min={1} className="text-red-400 font-bold w-12 outline-none pl-2" value={guestNumber} onChange={(e) => setGuestNamber(e.target.value)} />
                    </div>
                    <div className="flex">
                        <button className="flex-grow text-gray-500 hover:bg-gray-200 p-2 rounded-full duration-200 ease-out" onClick={() => setInput("")}>Anuluj</button>
                        <button
                            onClick={search}
                            className="flex-grow text-red-400 hover:bg-gray-200 duration-200 ease-out rounded-full">Szukaj</button>
                    </div>

                </div>
            )}

        </header>
    )
}

export default Header

