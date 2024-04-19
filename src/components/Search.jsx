const Search = ({ handleSearch, setInput, input }) => {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <input type="submit" />
    </form>
  );
};

export default Search;
