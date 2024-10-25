import App from "./App"; 
import ErrorPage from "./ErrorPage";
import CreateAccount from "./CreateAccount/CreateAccount";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import About from "./About/About";

const routes = [
  {
    path: "/CrownBurger",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
        {path:'menu',element:<Menu />},
        {index:true,element:<Home />},
        {path:'contact',element:<Contact />},
        {path:'createaccount',element:<CreateAccount />},
        {path:'about',element:<About />},
      ],
  },
  
];

export default routes;