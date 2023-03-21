import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'
import { Button } from './Button'
import { Description } from '@components/Description'

export default function GetMaxDuration() {
  const [data, setData] = useState()
  const [platform, setPlatform] = useState('netflix')
  const [year, setYear] = useState('2015')
  const [type, setType] = useState('seasons')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setData('')
    const URL = `${BASE_URL}/get_max_duration/?platform=${platform}&year=${year}&duration_type=${type}`
    fetch(URL)
      .then(data => data.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
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
      <Description>
        Película con mayor duración.
      </Description>
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
          Tipo de duracion por:
        </label>
        <select id="type" onChange={handleType} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          <option selected value="seasons">Temporadas</option>
          <option value="min">Minutos</option>
        </select>
        <div>
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900">Año</label>
          <input placeholder='2015' onChange={handleYear} type="number" id="year" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <Button loading={loading}>
          Buscar
        </Button>
      </form>
      {
        data && <div className='bg-[#eee] text-base text-center'>
          {data.data}
        </div>
      }
    </div>
  )
}