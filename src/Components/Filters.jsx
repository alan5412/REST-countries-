import { IoMdSearch } from "react-icons/io";

const Filters = ({ search, setSearch, region, setRegion }) => {
    return (
        <div className="flex flex-wrap gap-2 justify-between items-center bg-transparent dark:text-white p-4 max-w-screen-2xl mx-auto w-full">
            <div className="flex gap-2 p-2 bg-white rounded-sm shadow-md dark:bg-dark-element ">
                <IoMdSearch className="text-gray-500 m-2" />
                <input
                    className="outline-none"
                    type="text"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="flex gap-2 items-center bg-white p-0.5 rounded-sm shadow-md dark:bg-dark-element ">
                <select
                    className="p-3 bg-white dark:bg-dark-element outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
                    value={region}
                    onChange={e => setRegion(e.target.value)}
                >
                    <option hidden selected value="">Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;