import classes from "../Layout.module.css";
function Panel(props) {
  return <div className={classes.panel}>{props.children}</div>;
}
export default Panel;