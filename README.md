# Miservices

Miservices es una API rest que contiene diversos microservicios integrados como un acortadode de urls, un timeslamp y un tracker de ejercicios, estos estas impirados en los ejerccios de para obtener es certificado de backend en Freecodecamp.

## Tecnologias y librerias

- Nodejs
- ExpressJs
- mongodb
- Caching
- Cors
- Gitflow

## Documentacion

## Home

| url        | method | comentario          |
| ---------- | ------ | ------------------- |
| `/api/v1/` | `GET`  | La pagina principal |

## TrackerExecise

| url                                                | method | comentario                         | body                                                                 |
| -------------------------------------------------- | ------ | ---------------------------------- | -------------------------------------------------------------------- |
| `/api/v1/exercisetracker/users`                    | `GET`  | Obtienes una lista de los usuarios |                                                                      |
| `/api/v1/exercisetracker/users`                    | `POST` | Añadir un nuevo usuario            | `{"username": <String>}`                                             |
| `/api/v1/exercisetracker/users/{userID}/exercises` | `POST` | Añadir un nuevo ejercicio          | `{"description": <String>, "duration": <Number>, "date": <Date>, } ` |
| `/api/v1/exercisetracker/users/{useID}/logs`       | `GET`  | Obtienes el log del ejercicio      |                                                                      |

## Timeslamp

| url                  | method | comentario                                             |
| -------------------- | ------ | ------------------------------------------------------ |
| `/api/v1/timeslamp/` | `GET`  | Obtienes la hora y fecha de la zona horario del equipo |

## Timeslamp

| url                          | method | comentario                               | body              |
| ---------------------------- | ------ | ---------------------------------------- | ----------------- |
| `/api/v1/urlshorter/{urlID}` | `GET`  | Te redirecciona a la url con el mismo ID |                   |
| `/api/v1/urlshorter/`        | `POST` | Crear un link cortado                    | `{url: <string>}` |
