Rick and Morty API
Descripción

Bienvenido a la API de Rick and Morty, una API RESTful que proporciona información sobre los personajes, episodios y ubicaciones del universo de Rick and Morty. Esta API permite a los desarrolladores acceder a datos de la popular serie animada y utilizarlos en sus propias aplicaciones.
Endpoints
Personajes

    GET /characters: Obtiene una lista de todos los personajes.
    GET /characters/{id}: Obtiene la información de un personaje específico por su ID.
    GET /characters/?name={name}: Busca personajes por nombre.

Episodios

    GET /episodes: Obtiene una lista de todos los episodios.
    GET /episodes/{id}: Obtiene la información de un episodio específico por su ID.
    GET /episodes/?name={name}: Busca episodios por nombre.

Ubicaciones

    GET /locations: Obtiene una lista de todas las ubicaciones.
    GET /locations/{id}: Obtiene la información de una ubicación específica por su ID.
    GET /locations/?name={name}: Busca ubicaciones por nombre.

Ejemplos de Uso
Obtener todos los personajes

sh

curl -X GET "https://api.rickandmortyapi.com/characters" -H "accept: application/json"

Obtener un personaje específico

sh

curl -X GET "https://api.rickandmortyapi.com/characters/1" -H "accept: application/json"

Buscar personajes por nombre

sh

curl -X GET "https://api.rickandmortyapi.com/characters/?name=Rick" -H "accept: application/json"

Obtener todos los episodios

sh

curl -X GET "https://api.rickandmortyapi.com/episodes" -H "accept: application/json"

Obtener un episodio específico

sh

curl -X GET "https://api.rickandmortyapi.com/episodes/1" -H "accept: application/json"

Buscar episodios por nombre

sh

curl -X GET "https://api.rickandmortyapi.com/episodes/?name=Pilot" -H "accept: application/json"

Obtener todas las ubicaciones

sh

curl -X GET "https://api.rickandmortyapi.com/locations" -H "accept: application/json"

Obtener una ubicación específica

sh

curl -X GET "https://api.rickandmortyapi.com/locations/1" -H "accept: application/json"

Buscar ubicaciones por nombre

sh

curl -X GET "https://api.rickandmortyapi.com/locations/?name=Earth" -H "accept: application/json"

Autenticación

Actualmente, la API de Rick and Morty no requiere autenticación. Todos los endpoints son accesibles de manera pública.
Límite de Tasa

La API tiene un límite de tasa para evitar abusos y garantizar el rendimiento. El límite actual es de 1000 solicitudes por día por dirección IP.
Contribuir

Si deseas contribuir a esta API, por favor sigue los siguientes pasos:

    Haz un fork del repositorio.
    Crea una rama (git checkout -b feature/nueva-funcionalidad).
    Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
    Empuja a la rama (git push origin feature/nueva-funcionalidad).
    Abre un Pull Request.

Contacto

Si tienes alguna pregunta o sugerencia, por favor contacta al mantenedor del proyecto a través de email@example.com.

¡Gracias por usar la API de Rick and Morty!