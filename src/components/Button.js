const Button = ({ className, value, onClick, btnName, symbol }) => {

    return(
        <button className={ className } onClick={onClick()} value={value} btn-name={ btnName }>{ symbol }</button>
    )
}

export default Button;