export default [
  {
    title: 'Hubro Simulation Games',
    description: [
      "With the team at <a href='https://hubro.education' target='_blank'><b class='text-blue-500 underline'>Hubro.education</b></a> we've been pretty busy in implementing simulation games to provide valuable learning experiences to schools and institutions, using the latest reactive realtime technologies, with MeteorJS and React"
    ],
    technologies: ['React 18', 'MeteorJS'],
    image: 'projects/hubro.webp',
    prodUrl: 'https://hubro.education/en/',
    priority: 1020
  },
  {
    title: 'React+Redux Bookstore (Techtest)',
    description: [
      "A simple Books browsing/querying with 1 Million records. This app, created for a take-home test, allows you to browse through 1 Million auto-generated books (with funny fictional titles)",
      "The books are stored in a NoSQL in-memory DB. The Generator script is also included in the source tree"
    ],
    technologies: ['React 15', 'Redux', 'NodeJS', 'TingoDB', 'BabelJs', 'Webpack', 'Express', 'Node Fibers', 'Mocha/Chai + Sinon'],
    image: 'projects/books.webp',
    githubUrl: 'https://github.com/dmolin/techtest-books',
    //liveUrl: 'http://books.davidemolin.com',
    priority: 1010
  },
  {
    title:'payfriendz mobile App (MeteorJS)',
    description:[
      "With the Payfriendz team we built the new mobile realtime App that makes sending/receiving money easy as 123!",
      "The Cordova-based App was built using the realtime MeteorJS platform, that made it possible building a reactive UI and implement latency compensation features for offline use"
    ],
    technologies:['MeteorJS'],  //in case I want to list the techs used for this project,
    image: 'projects/payfriendz-meteor.webp',
    itunesUrl: 'https://itunes.apple.com/gb/app/payfriendz-send-request-money/id666006195?mt=8',
    priority: 1000
  },
  {
    title:'davidemolin.com (Meteor + React + Redux)',
    description:[
      "My own website, created with MeteorJS, along with React and Redux",
      "Meteor allows for a true realtime UI and isomorphic codebase, while React simplifies and rationalises the data flow and the application state management"
    ],
    technologies:['MeteorJS_1.3', 'React', 'Redux'],  //in case I want to list the techs used for this project,
    image: 'projects/davidemolin.webp',
    githubUrl: 'https://github.com/dmolin/www.davidemolin.com-react-redux',
    priority: 990
  },
  {
    title:'GunBlaster (MeteorJS)',
    description:[
      "MeteorJS App built for a friend, for sending email campaigns to a list of recipients through the MailGun API.",
      "The App features user authentication, realtime interface, asynchronous job scheduling, email throttling and tracking of bounced/rejected emails"
    ],
    technologies:['MeteorJS', 'Mongo', 'MailGun API'],  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/meteor-gunblaster',
    image: 'projects/gunblaster.webp',
    priority: 970
  },
  {
    title: 'Front-End Development course',
    description: [
      "With Udemy I authored a foundational course on Front-End Development, covering the basics of HTML, CSS, Javascript, jQuery",
      " and introducing the student to building single page Apps within an MVC framework, using Backbone. The course introduces also Unit testing with Mocha"
    ],
    technologies: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Backbone', 'Mocha'],
    prodUrl: 'https://www.udemy.com/foundations-of-front-end-development',
    image: 'projects/udemy-fofed.webp',
    priority: 965
  },
  {
    title:'Kanban React',
    description:[
      "A small project I built while studying React.",
      "The project was built using React and Flux and intentionally mimicks the look and feel of Trello. You can add/remove columns and cards, reorder them and drag and drop columns and cards around the board"
    ],
    technologies:'',  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/react-kanban',
    liveUrl: 'http://dmolin.github.io/react-kanban/',
    image: 'projects/kanban-react.webp',
    priority: 962
  },
  {
    title:'Admin Dashboard (AngularJS)',
    description:[
      "A very basic project that I use as a generic template when building Admin/Backoffice applications.",
      "The App uses an Express Node.js Server, with Mongo/Mongoose for DB access and Amazon S3 to store attachments"
    ],
    technologies:['Angular', 'Mongo', 'S3'],  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/angular-admin-dashboard',
    image: 'projects/aadmin-angular.webp',
    priority: 960
  },
  {
    title:'X-Plane Instruments (Node + Socket.io)',
    description:[
      "Access your X-Plane Flight Simulator Instruments, right in your browser, using UDP over Node.js and Socket.io",
      "This project, made for fun, allows you to see the instruments of your airplane flight simulator from a separate browser window, using X-Plane Data output API and a broadcasting NodeJS server via Socket.io"
    ],
    technologies:['NodeJS', 'Socket.io', 'UDP'],  //in case I want to list the techs used for this project,
    githubUrl: 'https://github.com/dmolin/flightSimPanels',
    videoUrl: 'https://vimeo.com/60944060',
    image: 'projects/xplane.webp',
    priority: 950
  },
  {
    title:'Policyexpert webapp (BackboneJS)',
    description:[
      "With QMetric, we built the entire Policyexpert Web Application to help their customers to build and choose the best car and home insurance",
      "The Web App was built using Backbone JS (connected via REST endpoints to a Java based backend)"
    ],
    technologies:['BackboneJS', 'Grunt'],  //in case I want to list the techs used for this project,
    image: 'projects/policyexpert-backbone.webp',
    liveUrl: 'https://www.policyexpert.co.uk/secured/#car',
    liveLabel: 'Visit',
    priority: 940
  },
  {
    title:'Zeebox Mission Control (Backbone)',
    description:[
      "Helping the guys at Zeebox (now Beamly) to improve and expand the Mission Control Web Application, used by network content owners to enhance their shows and channels for the Zeebox App and website"
    ],
    technologies:['Backbone.js'],  //in case I want to list the techs used for this project,
    image: 'projects/zeebox.webp',
    priority: 930
  },
  {
    title:'Mindcandy Moshlings.com',
    description:[
      "In Mindcandy I worked on all the company properties; In particular I was solely responsible for the whole front-end work on Moshlings.com from inception to delivery: markup, css, responsive design and javascript coding",
      "I also realised proof of concepts to replace the current Moshimonster flash-based registration process into a in OO Javascript/HTML5 one"
    ],
    technologies:['jQuery', 'OO Javascript'],  //in case I want to list the techs used for this project,
    image: 'projects/mindcandy.webp',
    liveUrl: 'http://www.moshlings.com',
    liveLabel: 'Visit',
    priority: 920
  }
]
