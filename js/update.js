fillExistingData();
    async function fillExistingData() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        let URL = `https://crud.teamrabbil.com/api/v1/ReadProductByID/${id}`
        document.getElementById('loader').classList.remove('d-none')
        let res = await axios.get(URL);
        document.getElementById('loader').classList.add('d-none')
        if(res.status===200){
            let items= res.data['data'][0]
            document.getElementById('ProductID').value=items['_id'];
            document.getElementById('ProductName').value=items['ProductName'];
            document.getElementById('ProductCode').value=items['ProductCode'];
            document.getElementById('ProductImg').value=items['Img'];
            document.getElementById('UnitPrice').value=items['UnitPrice'];
            document.getElementById('ProductQty').value=items['Qty'];
            document.getElementById('ProductTotal').value=items['TotalPrice'];
        }
    }

    async function UpdateProduct(){
        let ProductID=document.getElementById('ProductID').value;
        let ProductName=document.getElementById('ProductName').value;
        let ProductCode=document.getElementById('ProductCode').value;
        let ProductImg=document.getElementById('ProductImg').value;
        let UnitPrice=document.getElementById('UnitPrice').value;
        let ProductQty=document.getElementById('ProductQty').value;
        let ProductTotal= document.getElementById('ProductTotal').value;

        let URL = `https://crud.teamrabbil.com/api/v1/UpdateProduct/${ProductID}`
        document.getElementById('loader').classList.remove('d-none')
        let res = await axios.post(URL,
            {
                Img:ProductImg,
                ProductCode:ProductCode,
                ProductName:ProductName,
                Qty:ProductQty,
                TotalPrice:ProductTotal,
                UnitPrice:UnitPrice
            }
        );
        document.getElementById('loader').classList.add('d-none')
        if(res.status===200){
            window.location="index.html"
        }
        else {
            alert("error")
        }
    }