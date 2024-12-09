function Tasks(props) {
    console.log(props);
  
    return (
      <div>
        {props.tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Tasks;
  