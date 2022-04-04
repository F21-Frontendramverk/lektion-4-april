function TodoItem(props) {
    const { task } = props;

    return(
        <li>{ task }</li>
    )
}

export default TodoItem;