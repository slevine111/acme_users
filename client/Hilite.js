import React from 'react'

const Hilite = ({ searchTerm, string }) => {
  if (!searchTerm) return <div>{string}</div>
  const searchResult = RegExp(searchTerm.toLowerCase()).exec(
    string.toLowerCase()
  )
  const startIndex = searchResult ? searchResult.index : string.length

  return (
    <div>
      <span>{string.slice(0, startIndex)}</span>
      <span className="highlight">
        {string.slice(startIndex, startIndex + searchTerm.length)}
      </span>
      <span>{string.slice(startIndex + searchTerm.length)}</span>
    </div>
  )
}

export default Hilite
