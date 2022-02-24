# ScorePaly Album Search

This project is a SPA Web Application developed in ReactJs to build a

This project is an API based on [Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html) that provides and saves the data for Beauty Ops.
Beauty Ops is an app that allows salon owners to have an insight into their entire business through reports.

## Technologies

- [NodeJS](https://nodejs.org/en/docs/)
- [Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html)
- [Postgres](https://www.postgresql.org/)

## Running locally

1. You need to create a `.env` file based on the `.env.example` file on the root folder of the project.
2. Run `yarn` to install all dependencies.
3. Run `yarn develop` to start the server.
4. Open [http://localhost:1337/admin](http://localhost:1337/admin) with your browser to see the result.

## Test

```sh
yarn test
```

## Architecture

The app is in the `src` folder, inside it we have the following folders:

### Project tree

- `components`: in this folder we have all of react components;
  - `core`: here are the reusable components, e.g.: `TextField`, `SelectField`, and `Loading`;
  - `[other folders]`: here are the non reusable components, e.g.: `Header` (the app header), `Search` (the current index page);
- `hooks`: here we have all of the hooks, currently, the only one we use is `useSearchAlbums`;
- `services`: currently, we just have one service, the ScorePlay API;
- `store`: all of the Redux stuff are in here (store, reducers, actions, and the initialStates);
  - `configure.js`: here we combine all of the reducers;
  - `[other folders]`: each of the reducers, its actions, and its initialStates are in one of these folders;
- `test`: eventhough each react components has its test file on its folder, here we have the test setup and the reducres initialStates mocks;
  - `setup.js`: this setup.js file is used to start the redux while testing the components.
  - `mock`: here we have the main initialState for the reducers;
- `utils`: a few utils to help parsing the API response;

## Coding standards

The app is using ESLint and Prittier with the Airbnb standards.
