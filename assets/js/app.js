function collectData() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCategory = document.getElementById('productCategory').value;
    const imageUrl = document.getElementById('imageUrl').value;

    return {
        productName: productName,
        productPrice: productPrice,
        productCategory: productCategory,
        imageUrl: imageUrl
    };
}

function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.productName}</td>
            <td>${data.productPrice}</td>
            <td>${data.productCategory}</td>
            <td><img src="${data.imageUrl}" alt="Product Image" width="100" height="100"/></td>
            <td><button class="delete">Delete</button></td>
        </tr>
    `;
    return newHTML;
}

function renderHTML(newHTML) {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML += newHTML;

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.target.closest('tr').remove();
        });
    });
}
function clearForm() {
    const productForm = document.getElementById('productForm');
    productForm.reset();
    const productNameInput = document.getElementById('productName');
    productNameInput.focus();
}

function addProductToTable(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data);
    renderHTML(newHTML);
    clearForm();
}
