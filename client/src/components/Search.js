function Search({ searchTerm, filterSearch }) {
    function handleChange(e) {
        filterSearch(e.target.value);
    }

    return (
        <div className="ml-10 mb-10">
            <form>
                <label>
                    <input 
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