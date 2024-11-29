const DeleteCustomer = (props) => {
  const url = props.data._links.customer.href;
  return <button onClick={() => props.deleteCustomer(url)}>Delete</button>;
};

export default DeleteCustomer;
