import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'

export default function GetActor() {
  const [data, setData] = useState()
  const [platform, setPlatform] = useState('netflix')
  const [year, setYear] = useState('2015')

  const handleSubmit = (e) => {
    e.preventDefault()
    const URL = `${BASE_URL}/get_actor/?platform=${platform}&year=${year}`
    fetch(URL)
      .then(data => data.json())
      .then(json => setData(json.data))
  }

  const handlePlatform = (e) => {
    const val = e.target.value
    setPlatform(val)
  }
  const handleYear = (e) => {
    const val = e.target.value
    setYear(val)
  }

  return (
    <div className="tabs">
      <p>
        Actor que más se repite según plataforma y año.
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
        <div>
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900">Año</label>
          <input placeholder='2015' onChange={handleYear} type="number" id="year" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button>Get Max Duration</button>
      </form>
      <div className='bg-[#eee] text-base'>
        {data && data}
      </div>
    </div>
  )
}