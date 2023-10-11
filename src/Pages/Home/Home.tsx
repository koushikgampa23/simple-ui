import NavBar from "./navbar/NavBar";
import classes from './Home.module.css';
import { GenerateWeb } from "./generate-web/GenerateWeb";
import { SignUp } from "./sign-up/SignUp";

const Home = () => {
  return (
    <div className={classes.homePage}>
      <NavBar />
      <div className={classes.container}>
        <GenerateWeb />
        <SignUp />
      </div>
    </div>
  );
};

export default Home;
