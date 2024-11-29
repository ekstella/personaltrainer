const DeleteTraining = (props) => {
    console.log(props)
    const id = props.data.id;
    const url = "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings/" + id;
    return <button onClick={() => props.deleteTraining(url)}>Delete</button>;
  };
  
  export default DeleteTraining;
  