# API documentation

This API uses messages with IPC classes of electron.

It'll be described as :

<details><summary> query-channel [parameter:type,...]

> Description

</summary>

## success-channel

```JSON
JSON response
```

## error-channel

```JSON
JSON response
```

</details>

<hr>

<details><summary> get-worlds-list

> Send back a list of the worlds available

</summary>

## worlds-list

```JSON
[
    {
        "ID":number,
        "name":string,
        "description":string,
        "image":string
    }
]
```

## error-worlds-list

```JSON
{
    "message": "Failed to load the worlds list",
    "errors": [
        CASE: no world => "No world available",
        CASE: db access => "Can't access database"
    ]
}
```

</details>

<details><summary> get-world-details [worldID:number]

> Send back the detailed informations of a given world

</summary>

## world-details

```JSON
{
    "id": number,
    "name":string,
    "description":string,
    "image":file?string?,
    "tags":[string],
    "maps":[
        {
            "id": number,
            "name":string,
            "description":string,
            "image":file?string?
        }
    ],
    "playlists":[
        {
            "id":number,
            "name":string,
            "description":string,
            "image":file?string?,
            "tags":[string]
        }
    ],
    "components":[
        {
            "id":number,
            "name":string,
            "description":string,
            "image":file?string?,
            "model":number
        }
    ],
    "characterSheets":[
        {
            "id":number,
            "name":string,
            "description":string,
            "image":string,
            "model":number
        }
    ]
}
```

## error-worlds-list

```JSON
{
    "message": "Failed to load the world {id} details",
    "errors": [
        CASE: db access => "Can't access database",
        CASE: world not found => "This world doesn't exists"
    ]
}
```

</details>

<details><summary> get-maps-list [worldID:number(optional)]

> Send back the list of maps available globally OR only for one world

</summary>

## maps-list

```JSON
[
    {
        "id":number,
        "name":string,
        "description":string,
        "image":file?string?,
        "tags":[string]
    }
]
```

## error-maps-list

```JSON
{
    "message": "Failed to load the world {id} details",
    "errors": [
        CASE: db access => "Can't access database",
        CASE: world not found => "This world doesn't exists",
        CASE: no maps list globally => "No map available",
        CASE: no maps list for the given world => "No map available for this world"
    ]
}
```

</details>
