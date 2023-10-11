import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <span className={classes.header}>Startup 3</span>
      <div className={classes.subContainer}>
        <a href="#" className={classes.linkElmStyle}>Overview</a>
        <a href="#" className={classes.linkElmStyle}>Prices</a>
        <a href="#" className={classes.linkElmStyle}>Blog</a>
        <a href="#" className={classes.linkElmStyle}>FeedBack</a>
        <button className={classes.buttonStyle}>Purchase</button>
      </div>
    </div>
  );
};

export default NavBar;
