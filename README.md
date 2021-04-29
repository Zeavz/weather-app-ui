# Welcome to my Weather App :)

New React project! 🙏

The UI is deployed here: https://reverent-kepler-dc499d.netlify.app/

Built using React on the front end with NestJs on the back 💻
This is a PWA app, can view it in browser or even try downloading it to your phone!

You can follow the generic react instructions I kept below to run the app locally, or if you'd like feel free to make changes and push into the `develop` branch it will auto deploy to the Netlify server.

you can also find the api service here: https://github.com/Zeavz/weather-app-api, same running steps apply, feel free to make changes and deploy to `develop`. The api deploys to a `heroku` server instead: https://jenis-weather-api.herokuapp.com/

The weather data is powered by https://openweathermap.org/, went with this one because of their weather icon support 🦜

## backlog/learnings:
- Adding input validators on the google search bar
- Leveraging device location to do weather searches
- Ideally should minify the app and maybe try to hide the google api key better if this was a real prod app
- Refactoring and adding tests for the react code... was an interesting challenge but realized how much I need to learn in react
- View on super wide monitors 👎
- Zooms weird on iphone 12 🤔

*DISCLAIMER - Images and some of the css styles were found online and tweaked*

---

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
