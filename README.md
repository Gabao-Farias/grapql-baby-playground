<div style="display:flex;flex:1;justify-content:center;">
<img width=200 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png">
</div>

# GraphQL Playground Repo

## Tips discovered during the development

- Install the VS Code extension for `gql` typing format;
- If you try to install only one dependency, and then another dependency that depends on the latest, you may have compatibility issues, but trying to install them on the same command, they will resolve their compatible versions;
- You can use `node:{dependency}` to import deps from node native modules;

## Approaches

To use GraphQL, you can start with 2 approaches, below you wil see how each one works.

### Schema First

As the name says, you will start the development by developing the schema first, using the `gql` function and right after you'll write the schema/types of the data that you'll be using.

### Code First

Also, as the name says, you will start the development by developing the code first. In this case, the schema is generated based on the code + definitions of decorators in the functions, classes and attributes.

## Running the app

1. Install the dependencies

`yarn install`

2. Run the app

2.1. Run the simple example (schema first approach)

`yarn dev:simple`

2.1. Run the normal example (code first approach)

`yarn dev`

## References

The lovely Rocketseat doing it again! <3

https://youtu.be/1dz48pReq_c
