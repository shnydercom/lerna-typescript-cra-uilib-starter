# lerna-typescript-cra-uilib-starter
Starter for Monorepos: Lerna, TypeScript, CRA and Storybook

- now supports react-scripts version 4 
- contains the storybook "sb init" scaffolding with typescript, with slight modifications
- the UI library packages .css and .scss files in the library-folders now

[more details in the blogpost](https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli)

# known issues
- if you get this error message: `The react-scripts package provided by Create React App requires a dependency: my-monorepo-cra-app:   "babel-loader": "8.1.0"` or another version, please remove the yarn.lock file and update the "resolution" field for babel-loader in the root package.json. This conflict always happens on a fresh install when either CRA or storybook have new versions. 

Pull Requests welcome!