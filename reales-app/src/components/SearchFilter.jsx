import React from 'react'

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name..."
        className="searchBar"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchFilter
