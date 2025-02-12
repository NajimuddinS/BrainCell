# Users List App

This is a simple React app that fetches a list of users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and displays their information. It includes a search feature to filter users by their name.

## Features
- Fetches user data from the JSONPlaceholder API.
- Displays user name, email, and website.
- Search functionality to filter users by name.
- Displays loading and error states.
- If no users match the search query, a message will be shown indicating no results.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling the app with a separate stylesheet (`App.css`).

## Installation

To run the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/NajimuddinS/BrainCell.git

Navigate to the project directory:

```bash
cd BrainCell
```
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm start
```
How It Works
On initial load, the app fetches a list of users from the API.
The data is stored in a state (users), and the app shows a loading message until the data is successfully fetched.
A search bar allows users to filter the displayed list by name.
If no matching results are found, a "No users found" message is displayed.
Error Handling
If the API request fails, an error message will be displayed.
If the app is loading, a loading message will be shown.

Contribution Guidelines
Feel free to fork this repository and submit pull requests. If you find any bugs or have suggestions for improvements, open an issue or contribute directly!

License
This project is licensed under the MIT License - see the LICENSE file for details.
