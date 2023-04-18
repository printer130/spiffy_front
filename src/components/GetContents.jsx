import { useState } from "preact/hooks"
import { BASE_URL } from 'constants.js'
import { Button } from './Button'
import { Description } from '@components/Description'

const countries = ['g', '13+', 'all', '18+', 'r', 'tv-y', 'tv-y7', 'nr', '16+',
'tv-pg', '7+', 'tv-14', 'tv-nr', 'tv-g', 'pg-13', 'tv-ma', 'pg',
'nc-17', 'unrated', 'tv-y7-fv', 'ur']

export default function GetContents() {
  const [data, setData] = useState()
  const [rating, setRating] = useState('all')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setData()
    const URL = `${BASE_URL}/get_contents/?rating=${rating}`
    fetch(URL)
      .then(data => data.json())
      .then(json => {
        setData(json.count)
        setLoading(false)
      })
  }

  const handleRating = (e) => {
    const val = e.target.value
    setRating(val)
  }

  return (
    <div className="tabs">
      <Description>
      La cantidad total de contenidos/productos (todo lo disponible en streaming, series, peliculas, etc) según el rating de audiencia dado (para que publico fue clasificada la pelicula). La función debe llamarse get_contents(rating) y debe devolver el numero total de contenido con ese rating de audiencias.
      </Description>
      <form onSubmit={handleSubmit}>
        <label for="Country" class="block mb-2 text-sm font-medium text-gray-900">
          Rating
        </label>
        <select id="Country" onChange={handleRating} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
          {
            countries.map(c => {
              return <option value={c}>{c}</option>
            })
          }
        </select>
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