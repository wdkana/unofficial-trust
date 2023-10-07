# Unofficial Trust+ Website

<div style="text-align:center">

![Trust+ Screenshoot](https://github.com/deaaprizal/trustplus-client/blob/main/src/assets/images/trust+.png?raw=true)

</div>

The Unofficial Trust+ Website is an open source project that aims to provide a user-friendly interface for searching a list of websites that have been blocked by the government. This project aims to promote a new modern looks & feels.

```javascript
$: our data maybe not 100% correct & up to date since it based on static JSON dummies 😄.
$: But we grab it from the endpoint of real truspositive websites.
```

## Features & Roadmap

- [✅] **Search Functionality**: Users can search for specific websites in the blocked list by entering a keyword or URL.
- [✅] **User-Friendly Interface**: The website is designed to be intuitive and easy to navigate, ensuring a smooth user experience for visitors.
- [🔥] **User Contributions**: Users can contribute to the project by suggesting new websites to be added to the blocked list or providing updates to existing JSON entries.
- [⏳] **Statistic Page**: Showing a list of data count based on available categories.
- [⏳] **Statistic Graphs**: Showing a graph for visualizing the data
- [⏳] **Data Scrapping? 🤦‍♂️**: Get a realtime blocked website list by the gov? i'm not 100% sure legal. (original trustpositive API enpoint (GET & POST) is `publicly accessible` via POSTMAN or other api tester tools. but then they give us `CORS` when we use from our web client).
  
## Installation

To run the Unofficial Trust+ Website locally, follow these steps (we use `bun runtime`):

1. Clone the repository: `git clone [this repos]`
2. Navigate to the project directory
3. Install the project dependencies: `bun install`
4. Start the development server: `bun dev`
5. Open your web browser and visit `http://localhost:4321` to access the Unofficial Trust+ Website.
6. Take a look at `./src/assets/dummies/.....`: here is our data related to the original websites.

## Contributing

Contributions to the Unofficial Trust+ Website are welcome and encouraged! To contribute to the project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch.
3. Make your desired changes or additions to the codebase.
4. Commit and push your changes to your forked repository.
5. Submit a pull request to the original repository, describing your changes in detail.

Please ensure that your contributions align with the project's code of conduct and follow the established guidelines.

## License

The Unofficial Trust+ Website is released under the [MIT License](LICENSE). You are free to modify and distribute the project as per the terms of the license.

## Acknowledgements

- [Trust+](https://unofficial-trustpositif-website.vercel.app/) - for providing the data and inspiration for this project.
- [React](https://reactjs.org) - for the JavaScript library used to provide a great UI component control.
- [Astro](https://astro.build) - for the Framework used to create website structure.
- [Vercel](https://vercel.com/) - for the Edge runtime used to run the run the server.

## Contact

If you have any questions, suggestions, or feedback, please don't hesitate to contact us:

- Project Website: [Trust+](https://unofficial-trustpositif-website.vercel.app/)
- Email: [deacourse@icloud.com](mailto:deacourse@icloud.com)
- Issue Tracker: [GitHub Issues](https://github.com/deaaprizal/unofficial-trust-plus-website/issues)

We appreciate your interest in the Unofficial Trust+ Website and look forward to hearing from you!
