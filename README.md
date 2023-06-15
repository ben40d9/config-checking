# config-checking

`config-checking` is a command-line interface (CLI) tool designed to interact with the GitHub API. It leverages the power of Octokit, a GitHub REST API client for JavaScript, to provide users with a seamless way to perform tasks on GitHub directly from the command line.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Flow of the Application](#flow-of-the-application)
- [Contributing](#contributing)
- [License](#license)

## Overview

The `config-checking` tool is designed to streamline the process of interacting with GitHub repositories. It uses the Octokit library to access the GitHub API, allowing users to perform various tasks directly from the command line. This tool is an excellent demonstration of how to create a CLI tool that interacts with an API, showcasing the power and flexibility of Node.js.

## Installation

To install the `config-checking` tool, you need to clone the repository and install the necessary dependencies. Here are the steps:

1. Clone the repository:

```bash
git clone https://github.com/ben40d9/config-checking.git
cd config-checking
```

2. Install the dependencies:

```bash
npm install
```

## Usage

To use the `config-checking` tool, you need to start the application:

```bash
npm start
```

Follow the prompts to configure your environment and choose your desired functionality.

## Flow of the Application

The application follows a specific flow to ensure the correct configuration and execution of tasks:

1. **Configure Environment**: The `configureEnv()` function is called to set up the environment. This function checks if the environment is correctly configured and prompts the user to enter their personal access token for the GitHub API.

2. **Check Critical App Data**: The `isCriticalAppDataLoaded()` function is called to ensure that the necessary data, such as the port and token, are set before proceeding.

3. **Launch Startup Menu**: The `launchStartupMenu()` function is called to display a menu to the user. This menu allows the user to choose the functionality they want to use.

4. **Next Step**: The `nextStep()` function is called after the startup menu. This function waits for the completion of `launchStartupMenu()` and runs the appropriate function based on the user's choice.

## Contributing

Contributions to the `config-checking` tool are welcome! Feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the MIT License.
