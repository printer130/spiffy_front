import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'

const b_url = "https://api-pi-82r8.onrender.com/api"

export default function GetMaxDuration() {
  const [data, setData] = useState()
  const [platform, setPlatform] = useState('netflix')
  const [year, setYear] = useState('2015')
  const [type, setType] = useState('seasons')


  const handleSubmit = (e) => {
    e.preventDefault()
    const URL = `${BASE_URL}/get_max_duration/?platform=${platform}&year=${year}&duration_type=${type}`
    console.log(platform)
    console.log(year)
    console.log(type)
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
        Película con mayor duración con filtros opcionales de AÑO, PLATAFORMA Y TIPO DE DURACIÓN.
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
        <label for="type" class="block mb-2 text-sm font-medium text-gray-900">
          Tipo de duracion
        </label>
        <select id="type" onChange={handleType} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          <option selected value="seasons">Seasons</option>
          <option value="min">Minutes</option>
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