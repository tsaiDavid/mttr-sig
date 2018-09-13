type state = {
  name: string,
  title: string
};

type action =
  | Submit;

let component = ReasonReact.reducerComponent("InputForm");

let make = (_children) => {
  ...component,
  initialState: () => {
    name: "John Smith",
    title: "Engineer"
  },

  reducer: (action, state) =>
    switch (action) {
      | Submit => ReasonReact.Update({...state, name: "Changed"})
    },
  
  render: self => {
    <div>
      (ReasonReact.string(self.state.name))
    </div>
  }
}