const projects = [
  {
    id: 1,
    imgLink: './lib/styles/images/budget-app.png',
    title: 'Budget App',
    description: 'An app for kids allowing input of budgets and actual expenses. User views graphs and reports showing current money available to spend, weekly, monthly, and annual budgets. It has an input field for allowance, actual or budgeted, to be used as a budgeting tool.',
    techStack: ['React', 'Firebase', 'Enzyme'],
    codeLink: 'https://github.com/maiastone/budget-app',
    liveLink: 'https://budget-app-620c0.firebaseapp.com/',
  },
  {
    id: 2,
    imgLink: './lib/styles/images/keith-roberts.png',
    title: 'Keith Roberts Photography',
    description: 'A smooth responsive design intended to captivate users and keep them on the site.  The client wanted a site to showcase work, and attract and convert new clients for either fine art or commercial work.  Design choices include subtle transitions, large images, sparse text, filtering capability, and plenty of whitespace.',
    techStack: ['JavaScript', 'React', 'Sass'],
    codeLink: 'https://github.com/maiastone/keith-roberts',
    liveLink: '',
  },
  {
    id: 3,
    imgLink: './lib/styles/images/weather-tracker.png',
    title: 'Weather Tracker',
    description: 'Enter a city name or zipcode to see forecast information and pin favorite cities.  We accessed the OpenWeatherMap API and used Geolocation to determine the weather in the current city. Allow your browser to load "unsafe scripts" in order to render fresh weather information and current weather data. Setting up and enabling CORS for this app was beyond the time scope for this project.',
    techStack: ['Redux', 'React', 'Jest'],
    codeLink: 'https://github.com/maiastone/weather-tracker',
    liveLink: 'https://kswhyte.github.io/weather-tracker/#/weather/currentLocation?_k=q5ol4z',
  },
  {
    id: 4,
    imgLink: './lib/styles/images/chat-app.png',
    title: 'Chat App',
    description: 'Requirements for the chat app included two main features with filtering functionality: a list of users contributing to the chatroom, and a message view box.',
    techStack: ['JavaScript', 'React', 'Firebase'],
    codeLink: 'https://github.com/maiastone/chat-app',
    liveLink: 'https://chat-app-d59cd.firebaseapp.com/',
  },
];

module.exports = projects;
