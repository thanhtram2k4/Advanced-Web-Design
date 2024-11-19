// Hàm gọi API để lấy dữ liệu sản phẩm
function getProducts(callback) {
    fetch('https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/Hotel')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Callback function để xử lý kết quả trả về từ API
function handleProducts(error, data) {
    if (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    } else {
        const productTableBody = document.getElementById('productTableBody');
        data.forEach(product => {
            const row = `
            <tr class="text-center align-middle">
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td class="flex">
                    <img src="${product.img}" alt=""style="width: 100%;">
                </td>
                <td>${product.description}</td>
                <td>${product.location}</td>
                <td>${product.bookingdate}</td>
                <td>$${product.price}</td>
                <td>
                    <button onclick="" class="btn ml-1 btn-outline-warning">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onclick="deleteHotel('${product.id}')" class="btn ml-1 btn-outline-warning">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>`;
            productTableBody.innerHTML += row;
        });
    }
}


// Thêm dữ liệu vào API
function addHotelToAPI(hotelData, callback) {
    fetch('https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/Hotel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotelData)
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

document.getElementById("addHotel").addEventListener("click", function() {
    const newHotel = {
        name: document.getElementById("name").value,
        img: document.getElementById("image").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value
    };
    
    addHotelToAPI(newHotel, handleAddHotel);
});

function handleAddHotel(error, data) {
    if (error) {
        console.error('Lỗi khi tạo sản phẩm:', error.message);
    } else {
        console.log('Thêm dữ liệu thành công: ',data);
        getProducts(handleProducts);
    }
}

// Hàm gọi API để xóa sản phẩm
function deleteHotelFromAPI(id, callback) {
    fetch(`https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/Hotel/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

// Hàm xác nhận xóa sản phẩm
function deleteHotel(id) {
    if (confirm('Bạn có chắc chắn muốn xóa khách sạn này?')) {
        deleteHotelFromAPI(id, handleDeleteHotel);
    }
}

// Callback function để xử lý kết quả xóa sản phẩm
function handleDeleteHotel(error, data) {
    if (error) {
        console.error('Lỗi khi xóa sản phẩm:', error.message);
    } else {
        console.log('Xóa sản phẩm thành công: ', data);
        getProducts(handleProducts);
        window.location.reload();
    }
}

// Gọi hàm getProducts với callback handle Products
getProducts(handleProducts);