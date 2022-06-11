# API Documentation

For using API on front side, use `window.api`

<details><summary>window.api.models</summary>

Carries all informations about the models

```json
{
  <Structure>
  "ModelName" : {
    "attributes": {"attribute":{"property":<value>}},
    "associations": ["associationName"]
  },
  <Example>
  "WorldModel" : {
    "attributes": {
        "id": {
            "type": "integer",
            "primaryKey": true,
            "autoIncrement": true
        },
        "name": {
            "type": "string",
            "allowNull": false,
            "unique": true
        },
        "description": {
            "type": "text"
        },
        "imageURL": {
            "type": "string"
        }
    },
    "associations": [
        "tags"
    ]
  }
}
```

</details>

<details><summary>window.api.initDB()</summary>

This function is here to create fixtures into DB.<br/>
**WARNING**: It will recreate ALL the DB structure and reset all the data to basic ones, be sure of what you are doing using it !

- return: nothing
- errors: sqlite errors

</details>

<details><summary>window.api.getAllWorlds(extended, attributes, filters)</summary>

- Parameters:

  - extended:
    An array of associations, found in the window.api.models models available.

  - attributes:
    An array of object with attributes we select for each model, found in the window.api.models models available

  - filters:
    An array of filters (e.g. WHERE clauses) for the query that'll be executed.
    - logic : Logic applied to the sub-filters array if there is one.
    - value : comparison value of the filter
    - model : The model name
    - attribute : the model target attribute
    - operator : SQL operator
    - filters: array of filters

EXAMPLE :

- All worlds with tags :
  `getAllWorlds(["tags"])`
- All worlds IDs :
  `getAllWorlds(null,[model: "WorldModel", attributes: ["id"]])`
- All worlds with id>2 AND (tag=="ff" OR tag=="dystopie"):
  ```javascript
  getAllWorlds(["tags"], null, [
    {
      model: "WorldTag",
      attribute: "id",
      value: 2,
      operator: ">",
    },
    {
      logic: "OR",
      filters: [
        {
          model: "TagModel",
          attribute: "tag",
          value: "ff",
          operator: "=",
        },
        {
          model: "TagModel",
          attribute: "tag",
          value: "dystopie",
          operator: "=",
        },
      ],
    },
  ]);
  ```
- Return: World array
- errors: sqlite errors | bad parameters format errors
</details>
