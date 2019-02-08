# Dotnet new with Hooks

I created this repo to learn how to use React hooks by using the [`dotnet new  react`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore21) command.

## What have I done?

The main things that I did after creating the project are:

- Update the file `ClientApp/package.json`to be the same as the latest version created by Create React App (currently using `react-scripts` = `2.1.3`). This includes updating everything and removing any unneeded scripts and dependencies. I also added the eslint hooks plugin to the package.json eslint config.
- Moved the page components from `ClientApp/components`  into a folder `ClientApp/pages/`
- Re-wrote the component `ClientApp/pages/Counter` in a new hooks based component `ClientApp/pages/CounterHooks`
- Re-wrote the component `ClientApp/pages/FetchData` in a new hooks based component `ClientApp/pages/FetchDataHooks`
- Updated the navigation to link to these for comparison

To find out more about hooks start with the official react documentation: **[Hooks at a glance](https://reactjs.org/docs/hooks-overview.html)**

## Pre-requisites

- [Dotnet Core SDK >= 2.2](https://dotnet.microsoft.com/download)
- [Node >=8 ](https://nodejs.org/en/download/)
- [Visual Studio 2017](https://visualstudio.microsoft.com/downloads/) **OR**
- [Visual Studio Code](https://code.visualstudio.com/download) **AND** [C# extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)

## Getting started

You can run it from Visual Studio Code or the command line which will install all the NodeJS and Dotnet Core packages and then run both of them together.

### Visual Studio Code

You can run the project by opening it in Visual Studio Code and pressing **F5**. 

### Command Line

Run the following from the root of the repository:

>**Note:** You will need to also set the environment variable `ASPNETCORE_ENVIRONMENT` to `Development` on your machine.  See [here for Windows](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-2.2#windows) and  [here for MacOS](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-2.2#macos)

```bash
dotnet run
```

## More information

For more information see

- [Dotnet CLI documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x)
- [Create React App documentation](https://facebook.github.io/create-react-app/)
- [Hooks at a glance](https://reactjs.org/docs/hooks-overview.html)