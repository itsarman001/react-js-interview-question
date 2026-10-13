import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload?: string },
) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload || "" };
    case "SET_EMAIL":
      return { ...state, email: action.payload || "" };
    case "SET_PASSWORD":
      return { ...state, password: action.payload || "" };
    default:
      return state;
  }
};
export const UserFormWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch({ type: `SET_${id.toUpperCase()}`, payload: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", state);
  };
  return (
    <div>
      <h1>User Form with Reducer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
