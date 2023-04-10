# GraphQL Mock Data Generator

This tool generates mock data for GraphQL queries. It allows you to test your front-end applications or APIs without needing to set up a full back-end or database.

## How to Use

1. Clone the repository by running `git clone https://github.com/joelnz/graphql-mock-data-generator` in your terminal.
2. Install the required dependencies by running `npm install` in your terminal.
3. Create a JSON configuration file with the schema you want to use. The configuration file should include the query, fields to be generated, and the number of results you want.
4. Generate mock data by running `npm start -- --config path/to/config.json` in your terminal. This will print the generated mock data to the console.

### Example Config File

Here's an example configuration file:

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

##  Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License
This tool is licensed under the MIT License. See the LICENSE file for more information.