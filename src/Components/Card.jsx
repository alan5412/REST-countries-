const Card = ({ name, flag, population, region, capital }) => {
    return (
        <div className="bg-white rounded-lg h-100 shadow-md w-70 overflow-hidden dark:bg-dark-element dark:text-white">
            <div className="relative  h-48">
                <img
                    className="w-full h-full object-cover"
                    src={flag}
                    alt={`Flag of ${name}`}
                />
            </div>
            <div className="flex flex-col gap-1 p-7 mb-7">
                <h2 className="text-2xl font-extrabold mb-4">{name || "N/A"}</h2>
                <p className="text-lg">
                  <span className="font-bold">Population:</span> {population ? population.toLocaleString() : "N/A"}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Region:</span> {region || "N/A"}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Capital:</span> {capital || "N/A"}
                </p>
            </div>
        </div>
    )
}

export default Card;