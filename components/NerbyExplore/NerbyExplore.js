import NerbyCards from "./NerbyCards"

const NerbyExplore = ({ data }) => {

    return (
        <section className="pt-4">
            <h2 className="text-4xl font-semibold pb-5">
                Odkrywaj okolice
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.map((item) => (
                    <NerbyCards
                        city={item.City}
                        time={item.TimeTravel}
                        image={item.Image}
                        key={item.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default NerbyExplore
