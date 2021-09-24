# Tempo Run 🏃‍♀️🏃‍♂️

Spotify produces several running playlists for common running cadences (e.g. 150bpm, 160bpm etc), however they often vary wildly in tempo. Being forced to run out of sync with the music is not ideal. An even worse option is to recalibrate your cadence and speed up or slow down to stay in time with the music. Either way, your flow is ruined.

This app allows you to create custom Spotify playlists uniquely generated based on a selection of artists and energy profile that match your target tempo.

View a live demo [here](https://hidden-gorge-82205.herokuapp.com/).

![Home page](/tempo-run-home.PNG "Home Page")

## Technologies 🔨

- React
- Express JS
- Oauth2
- Spotify API
- Sass
- Framer Motion

## Key Features ✨

- Login using your Spotify accout (Oauth2)
- Search Spotify for artists and add them to a 'seed' list used to generate the playlist.
- Select a desired tempo which matches your running cadence.
- Choose an energy profile to suit your running style. E.g. start with a low intensity and finish high.
- Generate the playlist based on your selections.
  - Sort playlist by duration or energy.
  - Delete individual tracks from playlist
- Save the playlist to your Spotify account

## Planning 🔎

- [Wireframes](https://github.com/adamgonlag/tempo-run/blob/main/planning/wireframe.png)
- [User Stories](https://github.com/adamgonlag/tempo-run/blob/main/planning/user-stories.md)

## Further Development 🚀

- Custom hook for authentication
- Playlists page to display the user's playlists. Would prevent the need to leave the app to see the saved playlist.
- Use react router for login, home, playlists page.
- Debounce function to limit API calls when user is typing search query or adjusting sliders.
- Custom playlist names
- Refactor using the Context API
- Drag and drop playlist rows
