export const DEF_FUNCTION = [
  {
    name: "get_max_duration",
    description: "Película con mayor duración con filtros opcionales de AÑO, PLATAFORMA Y TIPO DE DURACIÓN.",
    params: ["year", "platform", "duration_type"]
  },
  {
    name: "get_score_count",
    description: "Cantidad de películas por plataforma con un puntaje mayor a XX en determinado año",
    params: ["platform", "scored", "year"]
  },
  {
    name: "get_count_platform",
    description: "Cantidad de películas por plataforma con filtro de PLATAFORMA.",
    params: ["platform"]
  },
  {
    name: "get_actor",
    description: "Actor que más se repite según plataforma y año.",
    params: ["platform", "year"]
  }
]

export const BASE_URL = "https://api-pi-82r8.onrender.com/api"