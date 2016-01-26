# Server
After cloning the repo, inside server folder, run `npm install`

To start Development server, run `npm test`
To start Production server, run `npm start`


# Client
After cloning the repo, inside client folder, run `npm install`, `bower install`
To start Development (sass, minimize, etc), run `grunt serve`


# MySql script

  CREATE TABLE `users` (
    `id` char(36) NOT NULL,
    `firstname` varchar(50) NOT NULL,
    `email` varchar(50) NOT NULL,
    `createdAt` datetime NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
