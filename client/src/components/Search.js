function Search({ searchTerm, filterSearch }) {
    function handleChange(e) {
        filterSearch(e.target.value);
    }

    return (
        <div>
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