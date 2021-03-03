const Search = ({ setSearchTerm }) => {
  // const updateCatList = (searchTerm) => {
  //   const filteredList = catlist.filter((cat) => cat.name.includes(searchTerm));
  //   setCatlist(filteredList);
  // };
  return (
    <div>
      <input
        className="form-control"
        placeholder="Search By Name"
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};
export default Search;
