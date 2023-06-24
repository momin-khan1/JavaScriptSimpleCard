async function CreateProduct () {
    const ProductName = document.getElementById('productName').value;
    const ProductCode = document.getElementById('productCode').value;
    const UnitPrice = document.getElementById('unitPrice').value;
    const ProductQty = document.getElementById('productQty').value;
    const TotalPrice = document.getElementById('productTotal').value;

    const URL = 'https://crud.teamrabbil.com/api/v1/CreateProduct/'
    document.getElementById('loader').classList.remove('d-none')
    const res = await axios.post(URL, {
        ProductName: ProductName,
        ProductCode: ProductCode,
        UnitPrice: UnitPrice,
        ProductQty: ProductQty,
        TotalPrice: TotalPrice
    })
    document.getElementById('loader').classList.add('d-none')
    if(res.status===200){
        window.location="index.html"
    }
    else{
        alert("error")
    }
}