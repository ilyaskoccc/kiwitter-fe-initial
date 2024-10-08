import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Login from "./components/body/Login";
import Signup from "./components/body/Signup";
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/" exact>
          <PageLayout>Home</PageLayout>
        </Route>
        <Route path="/profile/:nick">
          <PageLayout>Profile page</PageLayout>
        </Route>
        <Route path="/detail/:twitId">
          <PageLayout>Twit detail</PageLayout>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
