const Btn = (props) => {

    return (
        <button onClick={props.fn}>{props.children}</button>
    )
}

export default Btn