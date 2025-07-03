import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const CountryDetail = () => {
    const { code } = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)
    const [borders, setBorders] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0])
                if (data[0]?.borders?.length) {
                    fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}&fields=name,cca3`)
                        .then(res => res.json())
                        .then(borderData => setBorders(borderData))
                } else {
                    setBorders([])
                }
            })
    }, [code])

    if (!country) return <div className="text-center mt-10">Cargando...</div>

    // Utilidades para mostrar info
    const nativeName = country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common
    const currencies = country.currencies
        ? Object.values(country.currencies).map(c => c.name).join(", ")
        : "N/A"
    const languages = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A"
    const tld = country.tld ? country.tld.join(", ") : "N/A"

    return (
        <div className="bg-white dark:bg-dark-back dark:text-white min-h-screen px-8 py-12 ">
            <div className="max-w-screen-2xl mx-auto " >
                <button
                    className="px-6 py-2 bg-white dark:bg-dark-element hover:bg-gray-200 dark:hover:bg-gray-700 rounded shadow-lg  mb-12 flex items-center gap-2"
                    onClick={() => navigate(-1)}
                >
                    &#8592; Back
                </button>


                <div className="flex flex-col lg:flex-row gap-30 items-start justify-between mx-auto">
                    <img
                        src={country.flags.svg}
                        alt={country.name.common}
                        className="w-full max-w-lg rounded shadow-lg"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                        <h1 className="text-3xl font-semibold mb-8">{country.name.common}</h1>
                        <div className="flex flex-col md:flex-row gap-12 mb-8">
                            <div className="flex-1 space-y-2">
                                <p><strong>Native Name:</strong> {nativeName}</p>
                                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Sub Region:</strong> {country.subregion}</p>
                                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                            </div>
                            <div className="flex-1 space-y-2">
                                <p><strong>Top Level Domain:</strong> {tld}</p>
                                <p><strong>Currencies:</strong> {currencies}</p>
                                <p><strong>Languages:</strong> {languages}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                            <strong className="mr-2">Border Countries:</strong>
                            <div className="flex flex-wrap gap-2">
                                {borders.length > 0 ? (
                                    borders.map(border => (
                                        <button
                                            key={border.cca3}
                                            className="px-4 py-1 bg-white dark:bg-dark-element hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white shadow-lg rounded font-light text-sm"
                                            onClick={() => navigate(`/country/${border.cca3}`)}
                                        >
                                            {border.name.common}
                                        </button>
                                    ))
                                ) : (
                                    <span>No borders</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail