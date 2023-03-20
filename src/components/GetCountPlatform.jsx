import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'

const b_url = "https://api-pi-82r8.onrender.com/api"

export default function GetCountPlatform() {
  const [data, setData] = useState()
  const [platform, setPlatform] = useState('netflix')

  const handleSubmit = (e) => {
    e.preventDefault()
    const URL = `${BASE_URL}/get_count_platform/?platform=${platform}`
    fetch(URL)
      .then(data => data.json())
      .then(json => setData(json.data))
  }

  const handlePlatform = (e) => {
    const val = e.target.value
    setPlatform(val)
  }

  return (
    <div className="tabs">
      <p>
        Cantidad de películas por plataforma con filtro de PLATAFORMA.
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
        <button>Count by platform</button>
      </form>
      <div className='bg-[#eee] text-base'>
        {data && data}
      </div>
    </div>
  )
}