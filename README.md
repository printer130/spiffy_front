# Spiffy Front (Frontend de la API)
 
### API
- Película con mayor duración con filtros opcionales de AÑO, PLATAFORMA Y TIPO DE DURACIÓN. (la función debe llamarse get_max_duration(year, platform, duration_type))
 *`/api/get_max_duration/?platform=amazon&year=2010&duration_type=seasons`*
- Cantidad de películas por plataforma con un puntaje mayor a XX en determinado año (la función debe llamarse get_score_count(platform, scored, year))
*`/api/get_score_count/?platform=amazon&year=2015&scored=4`*
- Cantidad de películas por plataforma con filtro de PLATAFORMA. (La función debe llamarse get_count_platform(platform))
*`/api/get_count_platform/?platform=amazon`*
- Actor que más se repite según plataforma y año. (La función debe llamarse get_actor(platform, year))
*`/api/get_actor/?platform=amazon&year=2010`*
### Parametros:
- **platform:** amazon, hulu, disney, netflix
- **duration_type:** seasons, min
- **year:** 1920-2021
- **scored:** 1-5

### Modelo de machine learning entrenado
- Dado un id de usuario y el titulo de una pelicula, el modelo predice si recomienda la pelicula o no al usuario.
*`/api/predict/?userid=12345&title=the%20grand%20seduction`*