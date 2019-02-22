# ![CF](http://i.imgur.com/7v5ASc8.png) LAB - Dynamic Forms

## Before you begin

- Fire up your API Server!
  - Get your latest and greatest API server from the your earlier labs and get it running along with a MongoDB instance. (Recommended)
  - Or ... use the supplied server in this lab folder
  - Or ... simply connect to the deployed public API server
    - [https://javascript-401-api.herokuapp.com/api/v1/](https://javascript-401-api.herokuapp.com/api/v1/)...
- Once you have it up and running, fetch the schema for any model that you have. We will be using this to build our forms. Copy the schema response that you get from the server and paste it into a file called "schema.json", we'll be using that later.
  - _The public API supports "players" and "teams" models for all operations_

## Assignments

### Implement the RESTful Reducers

Begin by forking the [forms starter code sandbox](https://codesandbox.io/s/qv3zqp7jmj)

- Use a static .json file to bring in the players schema (you can simply import it)
- Implement all of the restful methods in the Redux Store for the player schema
  - GET - Retrieve one item
  - POST - Create New Item
  - PUT - Replace an item
  - PATCH - Update an item
  - DELETE - Remove an item
- Display a list of every element in the store, updating the list with every action taken on individual items.

### Create a generic `<Record/>` component

In the first phase, you created a form that can edit a single model. In this phase, you will be genericizing that component.

- Rename your editor component to `<Record />`
- It should dynamically load the correct schema json file based on a prop on the component given by the container component.
- Based on the schema
  - Draw the correct form
  - Connect to the right part of the store.
  - Ensure that the record list is from the right part of state
  - Ensure that your REST actions are using the right part of state

### Turn it on!

- Instead of importing .json files, connect the `<Record />` component to an API server to fetch the actual Schema from the API
- This should be optional. Use a flag of some kind to tell your component to read from a local .json file or connect to a server.
- Use a variable to identify the API server so that your application is deployable.

###### Testing

- Test the reducers to make sure that each action is properly manipulating state
- Test the form behavior to ensure that added items are showing in the list, updates are showing real time changes, etc.

###### Stretch Goals:

- Implement these functional methods as well ...

## Documentation

Complete the README.md file included in the lab folder

### Modules

#### `app.js`

##### Exported Values and Methods

The /src/components/App.js component exports the App.

It contains showRecords() and render() functions.

The showRecords() function modifies local state, setting the model based on user input.

The render function returns the main application form, including some conditional logic for whether the RecordList is displayed.

#### `record.js`

##### Exported Values and Methods

The /src/components/record/record.js builds and exports a generic Records class, for rendering records of both schemas. It uses react-jsonschema-form to help build the form based on whichever schema model is passed iin.

It also has a handleSubmit method for posting new records, and modifying current records.

#### `index.js Redux store`

##### Exported Values and Methods

The /src/store/index.js file builds and exports the Redux store. It uses a reducers variable to pull in the records reducer for state management.

#### `list.js`

##### Exported Values and Methods

The /src/components/record/lists.js file builds and exports the Records class for listing out all the records of whichever schema model is passed in. It contains deleteRecord(), editRecord(), reset(), and render() methods. DeleteRecord interacts with MapDispatchToProps to connect to the store.

#### `actions.js`

##### Exported Values and Methods

The /src/components/record/actions.js exports a set of standard action methods: post, destroy, get, put, and patch.

#### `reducers.js`

##### Exported Values and Methods

The /src/components/record/reducers.js file defines a function that handles state for the various actions, pulling out the type, playload, and from payload, the id, model, and record data, that are supplied by the action. It returns the appropriate object containing state, model, and record to operate on. It also defines the initial state.

#### `if.js - Main`

##### Exported Values and Methods

The /src/components/if.js file defines an If component for managing conditional display of other items. When the if component wraps another component with a valid boolean test, that other component will either display or not.

#### `index.js - Main`

##### Exported Values and Methods

The src/index.js file is the point of entry to the application, creating a function Main() which returns the app, wrapped by the <Provider /> component from react-redux, making the store availabe for state management to all child components.

### Setup

#### Running the app

- Endpoint: `https://3y1zo5zlzm.codesandbox.io/`

#### Tests

- How do you run tests?
- What assertions were made?
- What assertions need to be / should be made?

#### UML

Link to an image of the UML for your application and response to events
