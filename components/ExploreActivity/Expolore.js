import BigCard from "./BigCard"

const Expolore = ({ data }) => {
    return (
        <section className="mb-5">
            <h2 className="text-4xl font-semibold py-8">Odkryj spospoby spędzania czasu</h2>
            <div className="flex space-x-8 lg:justify-between overflow-x-scroll lg:overflow-x-hidden p-4 pb-4 -ml-2 scrollbar scrollbar-thin">
                {data?.map((item) => (
                    <BigCard key={item.id} image={item.Image} desc={item.Text} title={item.Title} />
                ))}
            </div>
        </section>
    )
}

export default Expolore
