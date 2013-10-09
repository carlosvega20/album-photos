# Album Photos

Photo Gallery with a wysiwyg integrated in the administrator side. (Just login with any facebook account and edit text right in place).

Solution to demonstrate good html/css/javascript coding practices (high performance  in mind) and the use of Git (Versioning Repository), AngularJs (Client-side MVC/MVVM), Restful service oriented architecture API (FireBase), Sass (css),NodeJS (Javascript server-side), Grunt (automation tasks), Bower (Dependency Management), Smacss (Scalable and modular Architecture for Css), modularizing the app code into logical modules, adding browsers history and running Unit tests with Jasmine and Karma.

Working Demo: http://carlosvega.site44.com/album-photos/


NOTE: I chose the most popular and my favorite new technologies, libraries and frameworks to resolve the evaluation. In the working process I use my own modified Agile Methodology with Pomodoro Technique to accomplish the evaluation in a short time frame.

## Why Angular.js?
Dependency injection, Modules, directives, data binding, Unit Test. And because is new an made by Google.

## Node.js, Bower, Grunt?
Its all the environment that I need to make automation tasks (grunt) like minify all the javascripts, concatenates and process Less into css minify file, compile all the project into a build. Bower to install and make library dependencies with just a command. And all of this is possible with Node.Js as a local javascript running server.

## Domain, Host, DB?
Github for the raw code and sub versioning control, Firebase.com (Real-time Backend accessible via restful API) for the data, and site44.com for domain and host that turns dropbox folder into a website.

## Code guidelines for this app'
Javascript Style guide: https://github.com/carlosvega20/javascript
Css Style guide: https://github.com/carlosvega20/css-style-guide

## Animation with http://daneden.me/animate/


***

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/carlosvega20/album-photos
$ cd album-photos
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Open `file:///path/to/album-photos/build/index.html` in your browser.

