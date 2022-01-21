const Screen = (values) => {
    return(
        <div>
            <p className="previous-value">{ values.num } {values.sign}</p>
            <p className="input-value">{ values.screen }</p>
        </div>
    )
}

export default Screen;