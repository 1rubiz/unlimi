// src/components/SearchInput.js
import { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import { DataContext } from '../context/data'
// http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50&search=Calvin%20Klein
const SearchInput = () => {
  const {setData} = useContext(DataContext)
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  // console.log(setData)

  const searchstr = (str)=> {
    if (str.includes(' ')) {
      // Replace all spaces with %20
      return str.split(' ').join('%20');
    } else {
      // Return the str as is if it is just one word
      return str;
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const str = searchstr(query)
    // console.log(str)
    try {
      const response = await axios.get(`http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50&search=`+str, {
        params: {
          search: query
        }
      });
      setData(response.data);
      // console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 w-42 max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m1.85-5.65A7 7 0 1110 3a7 7 0 018 8z"
        />
      </svg>
      <form onSubmit={handleSearch}>
      <input
        type="text"
        className="ml-2 flex-grow bg-transparent outline-none"
        placeholder="Search by Brand..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </form>
    </div>
  );
};

export default SearchInput;
