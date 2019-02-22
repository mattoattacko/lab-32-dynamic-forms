let initialState = {
  players: [
    { name: "Abe", position: "P", bats: "R", throws: "R" },
    { name: "Ben", position: "C", bats: "L", throws: "L" }
  ],
  teams: [{ name: "Astros" }, { name: "Mariners" }]
};

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
