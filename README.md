# ![CF](http://i.imgur.com/7v5ASc8.png) LAB - Dynamic Forms

## Lab 32

## Author: Matthew McQuain, et al.

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
