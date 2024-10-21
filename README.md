  <Provider store={store}>
    <App />
  </Provider>
  Provider is a component from React-Redux, which is a library that connects Redux to React.
It wraps the entire React component tree (in this case, <App />) and ensures that all components in the tree can access the Redux store, either directly or through React-Redux hooks (like useSelector, useDispatch).
The store prop is required by the Provider. This is the actual Redux store that holds the entire state of the app.

import { Toaster } from "react-hot-toast";
React-Toastify allows you to add notifications to your app with ease

import React, { lazy, Suspense } from "react";
lazy: A React function that allows components to be lazy-loaded. This means the component will only be loaded when it’s actually needed, improving performance by reducing the initial bundle size.
Suspense: A component that lets you show a fallback (like a loading spinner) while a lazy-loaded component is being fetched.

//App.js//
-->  <Suspense fallback={<Loading />}>
Suspense allows you to delay rendering of components that are lazy-loaded (with React.lazy). While the components are being fetched, it shows the Loading component (a spinner or loading indicator).

-->  <Route  path="/register"  element={
              <Public>
                <Register/>
              </Public> }/>
The Public component is likely a higher-order component (HOC) that ensures only unauthenticated users can access the registration page. This prevents logged-in users from accessing the registration page.


--> const token = localStorage.getItem("token");
localStorage is a built-in web storage object that allows you to store key-value pairs in the user's browser. 
This method retrieves the value associated with the key "token" from localStorage. If the key "token" exists, it returns the value (typically a string); if the key doesn’t exist, it returns null.

-->  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
Purpose: Sets the base URL for all axios HTTP requests to the value of REACT_APP_SERVER_DOMAIN from the environment variables.

-->  const dispatch = useDispatch();
This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed. When passing a callback using dispatch to a child component, you may sometimes want to memoize it with useCallback.

-->  const navigate = useNavigate();
Purpose: useNavigate is a hook from React Router used to programmatically navigate to different routes after a successful login or based on the user’s role.

-->  e.preventDefault();
Prevent default behavior: Prevents the page from refreshing on form submission using it.

-->   const { data } = await toast.promise(
      axios.post("/user/login", { email, password, role }),
      {
        pending: "Logging in...",
        success: "Login successfully",
        error: "Unable to login user",
        loading: "Logging user...",
      }
    );
Sends an HTTP POST request to the backend (/user/login) using axios. The toast.promise() function shows the status of the login process (pending, success, error).

-->  dispatch(setUserInfo(jwt_decode(data.token).userId));
Decodes the token using jwt_decode to extract the user's ID and dispatches this to the Redux store using the setUserInfo action.

-->  components contain small small parts of the webpage such as navbar, sidebar, footer etc.
-->  pages contain the whole page, by combining the different components togethor.




