let initialState = {
  players: [
    { name: "JD", position: "C", bats: "R", throws: "R" },
    { name: "James", position: "P", bats: "R", throws: "L" },
    { name: "Bob", position: "RF", bats: "R", throws: "R" },
    { name: "Little Tommy", position: "CF", bats: "L", throws: "L" },
    { name: "Matsui", position: "SS", bats: "L", throws: "R" }
  ],
  teams: [
    { name: "Dodgers" },
    { name: "Mariners" },
    { name: "Marlins" },
    { name: "Swallows" },
    { name: "Giants" }
  ]
};

// Implement all of the restful methods in the Redux Store for the player schema
// GET - Retrieve one item
// POST - Create New Item
// PUT - Replace an item
// PATCH - Update an item
// DELETE - Remove an item

export default (state = initialState, action) => {
  let { type, payload = {} } = action;
  let { id, model, record } = payload;
  console.log("reducer action & payload", action, payload);

  switch (type) {
    case "POST":
      let postList = [...state[model], record];
      return { ...state, [model]: postList };

    case "DELETE":
      let deleteList = state[model].filter((record, idx) => idx !== id);
      return { ...state, [model]: deleteList };

    case "PUT":
      let putList = state[model].map((entry, idx) => idx === id);
      return { ...state, [model]: putList };

    case "GET":
      let getList = state[model].map((entry, idx) => idx === id);
      return { ...state, [model]: getList };

    case "PATCH":
      return state;

    default:
      return state;
  }
};
