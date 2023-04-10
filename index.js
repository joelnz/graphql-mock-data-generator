#!/usr/bin/env node

// Import necessary modules
const { graphql, buildSchema } = require('graphql');
const faker = require('faker');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');

// Parse command-line arguments using 'yargs'
const argv = yargs(hideBin(process.argv))
  .option('config', {
    alias: 'c',
    type: 'string',
    description: 'Path to JSON configuration file',
    default: './config.json',
  })
  .help().argv;

// Read the JSON configuration file and set the number of results to generate
const config = JSON.parse(fs.readFileSync(argv.config, 'utf-8'));
const numberOfResults = config.results || 10;

// Define the GraphQL schema based on the fields specified in the configuration file
const typeDefs = `
  type Query {
    items: [Item]
  }
  type Item {
    ${Object.keys(config.fields)
      .map((field) => `${field}: ${config.fields[field].type}`)
      .join('\n')}
  }
`;

// Build the schema from the type definitions
const schema = buildSchema(typeDefs);

// Define resolver functions for the root query that generate mock data for each field specified in the configuration file
const rootValue = {
  items: () => {
    const items = [];
    for (let i = 0; i < numberOfResults; i++) {
      const item = {};
      for (const field in config.fields) {
        item[field] = faker.fake(config.fields[field].faker);
      }
      items.push(item);
    }
    return items;
  },
};

// Execute the GraphQL query using the generated schema and resolver functions, then print the resulting JSON-formatted response to the console
graphql(schema, config.query, rootValue).then((response) => {
  console.log(JSON.stringify(response, null, 2));
});