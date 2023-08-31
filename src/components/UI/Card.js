import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;    //we had to do this because out of the box, a custom component (that you wanna use as a wrapper tag like div, h2, whatever) doesn't support classes of its children.

  return <div className={classes}>{props.children}</div>
}
// a default prop that React_js passes to all components even if you've not explicitly mentioned anything is the `children` prop.
export default Card;