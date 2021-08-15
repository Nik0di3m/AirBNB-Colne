import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns"
import { fetchAPI } from "../components/Utils/api"
import InfoCard from "../components/InfoCards/InfoCard"
import Map from "../components/Map/Map"


const Search = ({ searchRes }) => {

    const router = useRouter()
    const count = searchRes.length
    const { location, startDate, endDate, noOfGuest } = router.query

    const formatedStartDate = format(new Date(startDate), 'dd.MM.yy')
    const formatedEndDate = format(new Date(endDate), 'dd.MM.yy')
    const range = `${formatedStartDate} - ${formatedEndDate}`


    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
            <main className="flex pt-10 px-4">
                <section className="flex-grow">
                    <p className="text-xs">
                        Ponad {count} pobytów dla {noOfGuest} gości - {range}
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        {location} - pobyty
                    </h1>
                    <div className="hidden lg:inline-flex space-x-4 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button">Rodzaj miejsca</p>
                        <p className="button">Cena</p>
                        <p className="button">Rezerwacja natychmiastowa</p>
                        <p className="button">Pokoje i łóżka</p>
                        <p className="button">Więcej filtrów</p>
                    </div>
                    <div>
                        {searchRes.map((item) => (

                            <InfoCard key={item.id} location={item.location} image={item.img} desc={item.description} price={item.price} star={item.star} title={item.title} />
                        ))}
                    </div>

                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px] pl-4 mb-5">
                    <Map searchRes={searchRes}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const { location } = context.query
    const searchRes = await fetchAPI(`/places?location=${location}`)

    return {
        props: {
            searchRes
        }
    }

    return
}