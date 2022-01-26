const Button = () => {
    const btns = ['clear', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return(
        <>
        {btns.map((btn) => (
            <button className={btn === 'clear' ? 'btn long' : (btn === '0' ? 'btn mid' : 'btn')}>{ btn }</button>
        ))}
        </>
    )
}

export default Button;