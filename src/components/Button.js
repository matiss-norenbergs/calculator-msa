const Button = ({ className, value, onClick, btnName }) => {

    return(
        <button className={ className } onClick={onClick()} value={value} btn-name={ btnName }>{ value }</button>
    )
}

export default Button;