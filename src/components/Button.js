const Button = (props) => {
    const btns = ['clear', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    var key = 1;

    return(
        <>
        {btns.map((btn) => (
            <button className={btn === 'clear' ? 'btn long' : (btn === 0 ? 'btn mid' : 'btn')} onClick={props.func()} key={key++} value={btn} btn-name={"Button: " + btn}>{ btn }</button>
        ))}
        </>
    )
}

export default Button;