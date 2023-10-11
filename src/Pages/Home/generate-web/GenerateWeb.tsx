import classes from "./GenerateWeb.module.css";

export const GenerateWeb = () => {
  return (
    <div className={classes.container}>
      <span className={classes.header}>Generate Awesome Web Pages</span>
      <span className={classes.content}>
        The most important part of the Startup is the samples. The samples form
        a set of 25 usable pages you can use as is or you can add new blocks.
      </span>
      <div>
        <button className={classes.buttonStyle}>Learn More</button>
      </div>
    </div>
  );
};
