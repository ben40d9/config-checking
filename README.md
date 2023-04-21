# config-checking
inquirer powered CLI to access gitHub API

# GitHub Practice App

The GitHub Practice App is a command-line tool designed to help users interact with GitHub repositories, retrieve coding practice questions, and run solutions on their local machine.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Flow](#flow)
- [Contribute](#contribute)

## Installation

To install the app, simply clone the repository:

```
git clone https://github.com/yourusername/github-practice-app.git
cd github-practice-app
```

Install dependencies:

```
npm install
```

## Usage

Start the application:

```
npm start
```

Follow the prompts to configure your environment and choose your desired functionality.

## Flow

1. **Configure Environment:** `configureEnv()` checks that the port is configured and asks the user for their personal access token to make Octokit requests.
2. **Check Critical App Data:** `isCriticalAppDataLoaded()` runs under the hood to ensure that the port and token are set before proceeding.
3. **Main Menu:** `launchStartupMenu()` displays an Inquirer prompt for the user to choose the desired functionality.
4. **GitHub Gateway:** `nextStep()` awaits the completion of `launchStartupMenu()` and runs the appropriate `githubGateway()` method based on the user's choice.

The `githubGateway` object contains methods that run Octokit functions depending on the user's request. The app can pull a file from a repo, decode it, and run the decoded function on the user's local machine.

## Contribute

Contributions to the project are welcome! Feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the MIT License.
