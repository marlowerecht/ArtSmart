function Search({ searchTerm, filterSearch }) {
    function handleChange(e) {
        filterSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
        <div className="m-10">
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        className="w-1/2 border-2 border-yellow-700 bg-pink-100 bg-opacity-25 rounded px-3 py-2 text-amber-900 shadow-md focus:outline-none focus:border-pink-300"
                        type='text'
                        name='search'
                        value={searchTerm}
                        placeholder='search painting or artist'
                        onChange={handleChange}/>
                </label>
            </form>
        </div>
    )
}

export default Search;