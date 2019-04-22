import React from 'react'

const markEachLetter = (searchTerm, string) => {
  const regex = RegExp(searchTerm, 'g')
  let arr
  let arrayOfIndexesToHighlight = []
  const searchTermLength = searchTerm.length

  while ((arr = regex.exec(string)) !== null) {
    arrayOfIndexesToHighlight = [
      ...arrayOfIndexesToHighlight,
      ...[...Array(searchTermLength).keys()].map(i => i + arr.index)
    ]
  }

  return arrayOfIndexesToHighlight
}

const Hilite = ({ searchTerm, string }) => {
  console.log(string)
  if (!searchTerm) return <div>{string}</div>
  const searchResult = RegExp(searchTerm.toLowerCase()).exec(
    string.toLowerCase()
  )
  const startIndex = searchResult ? searchResult.index : string.length
  console.log(searchResult)
  console.log(startIndex)

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
