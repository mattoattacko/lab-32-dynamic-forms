# ![CF](http://i.imgur.com/7v5ASc8.png) LAB - Dynamic Forms

## Lab 32

## Author: Matthew McQuain, et al.

## Resources

- [Repo](https://github.com/mattoattacko/lab-32-dynamic-forms)
- [Back End](https://codesandbox.io/s/3yk7o4pp86)
- [Front End](https://3yk7o4pp86.codesandbox.io/)

### Modules

#### `app.js`

##### Exported Values and Methods

- app.js uses a component to export itself
- showRecords() and render() are contained w/in app.js
- local state is modified via showRecords()
- showRecords() can be changed via the user
- render() allows the user to return to app.js
- render() also decides if RecordList is displayed

#### `record.js`

- the Records class is located in record.js
- the Records class renders the player/team jsonschema
- posting and modifying of records is done via the handleSubmit method

#### `index.js Redux store`

- state management for the Redux store is done in index.js

#### `list.js`

- list.js builds the Records class when a jasonschema is passed in
- deleteRecord(), editRecord(), reset(), and render() methods are in list.js

#### `actions.js`

- actions.js exports the post, put, patch, get and destroy methods

#### `reducers.js`

- reducers.js defines initial state via functions

#### `if.js - Main`

- the if.js file manages conditional display of our other items.

#### `index.js - Main`

- this is where the user comes into the app

#### UML

Link to an image of the UML for your application and response to events
