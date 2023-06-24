async function getList() {
    document.getElementById('loader').classList.remove('d-none')
    const URL = "https://crud.teamrabbil.com/api/v1/ReadProduct"
    const res = await axios.get(URL)
    document.getElementById('loader').classList.add('d-none')

    if(res.status===200){
        const list = res.data['data']
        list.forEach((item) => {
            document.getElementById('itemList').innerHTML+=(
                `<tr>
                    <td> ${item["ProductName"]} </td>
                    <td> ${item["ProductCode"]} </td>
                    <td> ${item["UnitPrice"]} </td>
                    <td> ${item["Qty"]} </td>
                    <td> ${item["TotalPrice"]} </td>
                    <td> <button onClick="deleteItem('${item["_id"]}')">Delete</button> </td>
                    <td> <button onClick="updateItem('${item["_id"]}')">Update</button> </td>
                </tr>
                `
            )
        })
    }
    else{
        alert("Wrong")
    }
}
// Delete Api
async function deleteItem(id) {
    const url = `https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`
    const res = await axios.get(url)
    if(res.status===200){
        document.getElementById('itemList').innerHTML=""
        await getList()
    }
}

async function updateItem(id){
    window.location = `update.html?id=${id}`
}
getList()
