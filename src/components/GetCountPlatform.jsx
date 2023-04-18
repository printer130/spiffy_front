import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'
import { Button } from './Button'
import { Description } from '@components/Description'

export default function GetCountPlatform() {
  const [data, setData] = useState()
  const [platform, setPlatform] = useState('netflix')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setData()
    const URL = `${BASE_URL}/get_count_platform/?platform=${platform}`
    fetch(URL)
      .then(data => data.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }

  const handlePlatform = (e) => {
    e.preventDefault()
    const val = e.target.value
    setPlatform(val)
  }

  return (
    <div className="tabs">
      <Description>
        Cantidad de películas por plataforma.
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
        <Button loading={loading}>
          Obtener cantidad
        </Button>
      </form>
      <div className='bg-[#eee] text-base text-center'>
        {data?.count && data.count}
      </div>
    </div>
  )
}