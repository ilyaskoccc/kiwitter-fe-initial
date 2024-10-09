import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Login from "./components/body/Login";
import Signup from "./components/body/Signup";
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";
import { UserContextProvider } from "./context/UserContextProvider";
import PrivateRoute from "./private/PrivateRoute";
import UserTwits from "./components/body/UserTwits";
import HomePage from "./components/body/HomePage";

function App() {
  return (
    <div className="relative">
      <UserContextProvider>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/profile/:nickname">
            <UserTwits />
          </Route>
          <PrivateRoute path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
          </PrivateRoute>
        </Switch>

        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
