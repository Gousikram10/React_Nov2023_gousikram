const Styling =()=>{
    const style1=
    {
        color:"darkblue",
        backgroundColor:"lightblue",
        FontSize:"16px",
        padding:"10px",
        border:"1px solid blue",
        borderRadius:"5px"
    }
    return(
        <div>
            <h1 style={{color:"green"}}>Inline style in JSX Example</h1>
            <div>
                <p style={style1}>This is a paragraph with inline styles applied</p>
            </div>
        </div>
    );
}
export default Styling;