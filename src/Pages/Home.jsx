import { useEffect, useState } from "react"
import Card from "../Components/Card"
import Filters from "../Components/Filters"
import { Link } from "react-router-dom"


const Home = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // Filtrado
    const filteredCountries = countries.filter(country => {
        const matchesName = country.name?.common.toLowerCase().includes(search.toLowerCase())
        const matchesRegion = region ? country.region === region : true
        return matchesName && matchesRegion
    })

    return (
        <div className="bg-white dark:bg-dark-back">
            <Filters
                search={search}
                setSearch={setSearch}
                region={region}
                setRegion={setRegion}
            />
            <div className="max-w-screen-2xl w-full mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center-safe mt-4 min-h-screen">
                {filteredCountries.map(country => (
                   <Link
                        key={country.cca3}
                        to={`/country/${country.cca3}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Card
                            name={country.name?.common}
                            flag={country.flags?.svg}
                            population={country.population}
                            region={country.region}
                            capital={country.capital ? country.capital[0] : "N/A"}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home