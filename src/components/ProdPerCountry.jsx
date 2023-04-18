import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'
import { Button } from './Button'
import { Description } from '@components/Description'

const countries = ['canada', 'india', 'united states', 'united kingdom', 'france', 'spain', 'unknown', 'italy', 'japan', 'germany', 'australia', 'belgium', 'mexico', 'netherlands', 'new zealand', 'brazil', 'south africa', 'egypt', 'switzerland', 'austria', 'malaysia', 'argentina', 'united arab emirates', 'china', 'israel', 'south korea', 'sweden', 'norway', 'denmark', 'colombia', 'turkey', 'finland', 'nigeria', 'russia', 'hong kong', 'ireland', 'jordan', 'taiwan', 'poland', 'saudi arabia', 'thailand', 'indonesia', 'vietnam', 'lebanon', 'romania', 'philippines', 'iceland', 'mauritius', 'cameroon', 'kenya', 'uruguay', 'luxembourg', 'bangladesh', 'senegal', 'singapore', 'kuwait', 'namibia', 'mozambique', 'belarus', 'ghana', 'chile', 'zimbabwe', 'hungary', 'cyprus', 'pakistan', 'croatia', 'peru', 'cambodia', 'bulgaria', 'georgia', 'west germany', 'venezuela', 'guatemala', 'ukraine']

export default function ProdPerCountry() {
  const [data, setData] = useState()
  const [country, setCountry] = useState('canada')
  const [year, setYear] = useState('2015')
  const [type, setType] = useState('movie')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setData()
    const URL = `${BASE_URL}/prod_per_county/?country=${country}&year=${year}&type=${type}`
    fetch(URL)
      .then(data => data.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }

  const handleCountry = (e) => {
    const val = e.target.value
    setCountry(val)
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
      La cantidad de contenidos/productos (todo lo disponible en streaming) que se publicó por país y año. La función debe llamarse prod_per_county(tipo,pais,anio) deberia devolver la cantidada de contenidos/productos segun el tipo de contenido (pelicula,serie) por pais y año en un diccionario con las variables llamadas 'pais' (nombre del pais), 'anio' (año), 'pelicula' (cantidad de contenidos/productos).
      </Description>
      <form onSubmit={handleSubmit}>
        <label for="Country" class="block mb-2 text-sm font-medium text-gray-900">
          Country
        </label>
        <select id="Country" onChange={handleCountry} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          {
            countries.map(c => {
              return <option value={c}>{c}</option>
            })
          }
        </select>
        <label for="type" class="block mb-2 text-sm font-medium text-gray-900">
          Type
        </label>
        <select id="type" onChange={handleType} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          <option selected value="movie">Movie</option>
          <option value="tv show">TV Show</option>
        </select>
        <div>
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900">Año</label>
          <input placeholder='2015' onChange={handleYear} type="number" id="year" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <Button loading={loading}>
          Cantidad
        </Button>
      </form>
      <div className='bg-[#eee] text-base text-center'>
        {data?.count && data.count}
      </div>
    </div>
  )
}