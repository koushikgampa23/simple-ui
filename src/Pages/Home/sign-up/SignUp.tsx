import classnames from "classnames";
import classes from "./SignUp.module.css";
import { ReactComponent as DividerIcon } from "./Divider.svg";

export const SignUp = () => {
  return (
    <div className={classes.container}>
      <span className={classes.header}>Sign Up Now</span>
      <input
        type="text"
        placeholder="Your email"
        className={classes.inputStyle}
      />
      <input
        type="password"
        placeholder="Your Password"
        className={classes.inputStyle}
      />
      <div className={classes.checkboxContainer}>
        <input type="checkbox" className={classes.checkbox} />
        <span>I agree to the Terms of Service.</span>
      </div>
      <button className={classnames(classes.buttonStyle, classes.signIn)}>
        Sign In
      </button>

      <span className={classes.orContainer}>
        <DividerIcon />
        or
        <DividerIcon />
      </span>

      <button className={classnames(classes.buttonStyle, classes.twitter)}>
        Login via Twitter
      </button>
      <span className={classes.signInMsg}>
        Do you have an Account?<a href="#" className={classes.signInStyle}>Sign In</a>
      </span>
    </div>
  );
};
