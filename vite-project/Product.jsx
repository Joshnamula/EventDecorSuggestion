function Product(props) 
{
    console.log(props);

    return (
        <div style={{border: "1px solid black", marginTop: "10px"}}>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default Product;  