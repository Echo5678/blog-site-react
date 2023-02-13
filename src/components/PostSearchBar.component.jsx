export default function PostSearchBar({handleFormSearch, handleInputSearch, toggleSort, sortType, search}) {
    return (<div>
    <form action="POST" className="flex justify-between px-2 py-3 outline-none border border-black bg-white" onSubmit={handleFormSearch}>
      <input type="text" placeholder="Search" name="search" className="outline-none text-black text-lg w-full" onChange={handleInputSearch} />
      <button type="button" className="pr-3 pl-1 py-1 text-gray-400 w-14 border-l-2" onClick={toggleSort}>{sortType}</button>
      <button type="submit"><img src={search} alt="Search Icon" className="w-8" /></button>
    </form>
  </div>);
}