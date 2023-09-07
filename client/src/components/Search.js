import React, {useState} from 'react'

function Search() {
    // need to change logic because it is suppose to search my city!!!
    const [searchZip, setSearchZip] = useState("")
    const [filterZip, setFilterZip] = useState(0)
  
    function handleChange(e) {
        setSearchZip(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFilterZip(searchZip.length + filterZip)
        setSearchZip("")
    }
    return (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input type='text'
            value={searchZip}
            onChange={handleChange}
            placeholder="Search by zipcode...but does not work yet"/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search

/*
need to import data of cities
use filter to populate all cities looked for
*/