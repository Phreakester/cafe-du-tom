function CompleteOrder(props) {
  return (
    <div className="complete-order-main" onClick = {() => console.log(props.order.length)}>
      {props.order[0] && <button className="complete-order-button">Complete Order</button>}
    </div>
  );
}

export default CompleteOrder;
