# GraphQL Mock Data Generator

This tool generates mock data for GraphQL queries. It allows you to test your front-end applications or APIs without needing to set up a full back-end or database.

## How to Use

1. Clone the repository by running `git clone https://github.com/joelnz/graphql-mock-data-generator` in your terminal.
2. Install dependencies with `npm install`.
3. Edit the `config.json` file in the project root directory to define your schema and specify the fields you want to generate mock data for.
4. Run the tool with `npm start`. This will generate mock data and print it to the console.


### Example Config File

```json
{
  "query": "{ items { name, email, company, position, address, phoneNumber } }",
  "results": 25,
  "fields": {
    "name": {
      "type": "String",
      "faker": "{{name.findName}}"
    },
    "email": {
      "type": "String",
      "faker": "{{internet.email}}"
    },
    "company": {
      "type": "String",
      "faker": "{{company.companyName}}"
    },
    "position": {
      "type": "String",
      "faker": "{{name.jobTitle}}"
    },
    "address": {
      "type": "String",
      "faker": "{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.zipCode}}, {{address.country}}"
    },
    "phoneNumber": {
      "type": "String",
      "faker": "{{phone.phoneNumber}}"
    }
  }
}
```

This configuration file retrieves items with specific fields, generates 25 results, and specifies the fields to be generated, their types, and their faker templates.

##  Customizing the Config File
You can customize the configuration file to generate any data that you want by changing the query and fields properties. Refer to the faker.js documentation for available faker templates.
https://fakerjs.dev/api/

##  Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License
This tool is licensed under the MIT License. See the LICENSE file for more information.