const Search = ({search, setSearch}) => {
  return (
    <div className="search">
      <h2>
        <input type="text" value={search} onChance={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar"/>
      </h2>
      
    </div>
  )
}

export default Search;
