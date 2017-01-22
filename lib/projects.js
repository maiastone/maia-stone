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
    description: 'A smooth responsive design intended to captivate the user and keep them on the site.  The client wanted a site to showcase work, and attract and convert new clients for either fine art or commercial work.  Design choices include subtle transitions, large images, sparse text, filtering capability, and plenty of whitespace.',
    techStack: ['JavaScript', 'React', 'Sass'],
    codeLink: 'https://github.com/maiastone/keith-roberts',
    liveLink: '',
  },
  {
    id: 3,
    imgLink: './lib/styles/images/weather-tracker.png',
    title: 'Weather Tracker',
    description: 'A weather app that allows the user to enter a city name or zipcode anywhere in the world, to see different forecast information and pin favorite cities to the home page.  We retrieved and displayed forecast data from the OpenWeatherMap API and used the Geolocation API to determine the weather in the current city.',
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
  {
    id: 5,
    imgLink: './lib/styles/images/2DoList.png',
    title: '2Do List',
    description: 'This project took a prior project, IdeaBox, and pivoted it over to 2DoBox. We used webpack as our build tool, is fully accessibile, utilizes Sass, and were evaluated on user interface,  Sass, and testing.',
    techStack: ['JavaScript', 'jQuery', 'Sass'],
    codeLink: 'https://github.com/maiastone/2DoBox',
    liveLink: '',
  },
];

module.exports = projects;
