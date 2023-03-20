import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'

const b_url = "https://api-pi-82r8.onrender.com/api"

export default function GetScoreCount() {
  const [data, setData] = useState()
  const [platform, setPlatform] = useState('netflix')
  const [year, setYear] = useState('2015')
  const [type, setType] = useState('seasons')

  const handleSubmit = (e) => {
    e.preventDefault()
    const URL = `${BASE_URL}/get_score_count/?platform=${platform}&year=${year}&score=${type}`
    fetch(URL)
      .then(data => data.json())
      .then(json => setData(json.data))
  }

  const handlePlatform = (e) => {
    const val = e.target.value
    setPlatform(val)
  }
  const handleType = (e) => {
    const val = e.target.value
    setType(val)
  }
  const handleYear = (e) => {
    const val = e.target.value
    setYear(val)
  }

  return (
    <div className="tabs">
      <p>
        Cantidad de películas por plataforma con un puntaje mayor a XX en determinado año
      </p>
      <form onSubmit={handleSubmit}>
        <label for="platform" class="block mb-2 text-sm font-medium text-gray-900">
          Plataforma
        </label>
        <select id="platform" onChange={handlePlatform} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          <option selected value="netflix">Netflix</option>
          <option value="disney">Disney Plus</option>
          <option value="amazon">Amazon Prime</option>
          <option value="hulu">Hulu</option>
        </select>
        <label for="score" class="block mb-2 text-sm font-medium text-gray-900">
          Score
        </label>
        <select id="score" onChange={handleType} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div>
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900">Año</label>
          <input placeholder='2015' onChange={handleYear} type="number" id="year" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button>Get by Score</button>
      </form>
      <div className='bg-[#eee] text-base'>
        {data && data}
      </div>
    </div>
  )
}