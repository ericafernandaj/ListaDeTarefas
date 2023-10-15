const Search = ({search, setSearch}) => {
  return ( 
  // define o que será retornado e renderizado pelo componente.
  <div className="search">
    <h2>Pesquisar:</h2>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..."/>
  </div> 
  );
};

export default Search;