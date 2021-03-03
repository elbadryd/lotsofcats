const Search = ({ setSearchTerm }) => {
  return (
    <div>
      <input
        className="form-control"
        id="search"
        placeholder="Search By Name"
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};
export default Search;
