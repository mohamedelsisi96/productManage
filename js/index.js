var productName=document.getElementById("productName")
var productPrice=document.getElementById("productPrice")
var productCategory=document.getElementById("productCategory")
var productNumber=document.getElementById("productNumber")
console.log(productNumber)
var productDesc=document.getElementById("productDesc")
var productDisplay=document.getElementById("productDisplay")
var productSearch=document.getElementById("productSearch")
var addProductesbtn=document.getElementById("addProductes")
var productSearchbtn=document.getElementById("UpdatePro")
var errorName=document.getElementById("errorName")
var errorPrice=document.getElementById("errorPrice")

var errorNumber= document.getElementById("errorPrice")
var errorCategory=document.getElementById("errorCategory")
var errorDesc=document.getElementById("errorDesc")
var formError=document.getElementById("formError")
var productArr=[]
if (window.localStorage.getItem("data")){
    productArr=JSON.parse(window.localStorage.getItem("data"))
addProductInForm(productArr)
}
function validePName() {
    var regexPname=/^[A-Z][a-z]{3,}$/
    if(regexPname.test(productName.value)){
        errorName.classList.replace("d-block","d-none")
        productName.classList.replace("is-invalid","is-valid")
        return true;
    }else{
        errorName.classList.replace("d-none","d-block")
        productName.classList.add("is-invalid")
        return false;
    }
}
function validePPrice() {
    var regexPPrice=/^([0-9][0-9][0-9][0-9]|10000)$/gm
    if(regexPPrice.test(productPrice.value)){
        errorPrice.classList.replace("d-block","d-none")
        productPrice.classList.replace("is-invalid","is-valid")
        return true;
    }else{
        errorPrice.classList.replace("d-none","d-block")
        productPrice.classList.add("is-invalid")
        return false;
    }
}
function validePCategory() {
    var regexPCategory=/^(mobile|laptop|tv)$/i
    if(regexPCategory.test(productCategory.value)){
        errorCategory.classList.replace("d-block","d-none")
        productCategory.classList.replace("is-invalid","is-valid")
        return true;
    }else{
        errorCategory.classList.replace("d-none","d-block")
        productCategory.classList.add("is-invalid")
        return false;
    }
}
function validePNumber() {
    var regexPNumber=/^([0-9]+)$/i
    if(regexPNumber.test(productNumber.value)){
        errorNumber.classList.replace("d-block","d-none")
        productNumber.classList.replace("is-invalid","is-valid")
        return true;
    }else{
        errorNumber.classList.replace("d-none","d-block")
        productNumber.classList.add("is-invalid")
        return false;
    }
}
function validePDesc() {
    var regexPDesc=/^(.{20,})$/i
    if(regexPDesc.test(productDesc.value)){
        errorDesc.classList.replace("d-block","d-none")
        productDesc.classList.replace("is-invalid","is-valid")
        return true;
    }else{
        errorDesc.classList.replace("d-none","d-block")
        productDesc.classList.add("is-invalid")
        return false;
    }
}
function addProduct() {
    if (validePName()===true && validePPrice()===true && validePCategory()===true && validePDesc()===true && validePNumber()===true){
        var  prod={
            pName:productName.value,
            pPrice:productPrice.value,
            pCategory:productCategory.value,
            pNumber:productNumber.value,
            pDesc:productDesc.value,
        }
        productArr.push(prod)
        clearForm()
        addProductInForm(productArr)
        window.localStorage.setItem("data", JSON.stringify (productArr))
        formError.style.display="none"
    }
    else{
        formError.style.display="block"
    }
}
function clearForm(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productNumber.value=""
    productDesc.value=""
}
function addProductInForm(productArr) {
    var productContainer=``
    for(var i=0; i<productArr.length ; i++){
    productContainer+=`<tr class="table-success" >
    <td>${[i+1]}</td>
    <td>${productArr[i].pName}</td>
    <td>${productArr[i].pPrice}</td>
    <td>${productArr[i].pCategory}</td>
    <td>${productArr[i].pNumber}</td>
    <td class="text-wrap">${productArr[i].pDesc}</td>
    <td><button class="btn btn-secondary" onclick="updateProductEle(${i})">Edite</button></td>
    <td><button class="btn btn-danger" onclick="delProduct(${i})" >Delete</button></td>
  </tr>`
    }
    productDisplay.innerHTML=productContainer
}
function delProduct(delItem) {
    productArr.splice(delItem,1)
    window.localStorage.setItem("data", JSON.stringify (productArr));
    
    addProductInForm(productArr) 
}
function serProduct(item) {
    var serArr=[]
    for (var i=0;i<productArr.length;i++){
        if (productArr[i].pName.toLowerCase().includes(item.toLowerCase())){
            serArr.push(productArr[i])
        }
    }
    console.log(serArr)
    addProductInForm(serArr)
}
function updateProductEle(ind) {
    addProductesbtn.classList.replace("d-block","d-none")
    productSearchbtn.classList.replace("d-none","d-block")
    productName.value=productArr[ind].pName;
    productPrice.value=productArr[ind].pPrice;
    productCategory.value=productArr[ind].pCategory;
    productNumber.value=productArr[ind].pName;
    productDesc.value=productArr[ind].pDesc;
    UpdatePro.setAttribute("value",ind)
}
function finalUpdate(valIt) {
    console.log(valIt)
    productArr[valIt].pName=productName.value;
    productArr[valIt].pPrice=productPrice.value;
    productArr[valIt].pCategory=productCategory.value;
    productArr[valIt].pName=productNumber.value;
    productArr[valIt].pDesc=productDesc.value;
    addProductesbtn.classList.replace("d-none","d-block")
    productSearchbtn.classList.replace("d-block","d-none")
    UpdatePro.removeAttribute("val")
    addProductInForm(productArr) 

}



