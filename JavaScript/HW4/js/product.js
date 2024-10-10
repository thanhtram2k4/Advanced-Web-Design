    var product = [
        {
            id:"MP1",
            name:"Phòng đơn",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",
            img : "MP1.jpg",
            price:350000,
        },
        {
            id:"MP2",
            name:"Phòng đôi",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",

            img : "MP2.jpg",
            price:500000,
        },
        {
            id:"MP3",
            name:"Phòng 2 giường đơn nhỏ",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",
            img : "MP3.jpeg",
            price:650000,
        },
        {
            id:"MP4",
            name:"Phòng 2 giường đôi lớn",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",
            img : "MP4.jpg",
            price:900000,
        },
        {
            id:"MP5",
            name:"Phòng đơn",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",
            img : "MP1.jpg",
            price:350000,
        },
        {
            id:"MP6",
            name:"Phòng đôi",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",

            img : "MP2.jpg",
            price:500000,
        },
        {
            id:"MP3",
            name:"Phòng 2 giường đơn nhỏ",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",
            img : "MP3.jpeg",
            price:650000,
        },
        {
            id:"MP4",
            name:"Phòng 2 giường đôi lớn",
            detail: "Phòng nghỉ ấm cúng với giường đơn, trang bị đầy đủ tiện nghi hiện đại, phù hợp cho khách đi công tác hoặc nghỉ dưỡng một mình",
            img : "MP4.jpg",
            price:900000,
        },

    ];
// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   //lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem('listProduct'));
   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
Save();
var listLocal = function(){
    var listproduct ="";
    for (var i in product){
        var data = JSON.parse(JSON.stringify(product[i]))
     var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
     listproduct += '<div class="card product p-2" styte="width:auto">'; 
     listproduct += '<img class="card-img-top" src="img/' + data.img +'" alt="...">';
     listproduct += '<div class="card-title product-title text-center h5" >'+data.name+'</div>';
     listproduct += '<div class="price text-center h6">'+data.price+'₫</div>';
     listproduct +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
     // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
     listproduct +=  '<a>';
     listproduct +=  '<i class="fas fa-cart-plus"></i>';
     listproduct +=  '</a>';
     listproduct +=  '</span>';
     listproduct += '</div>';
     listproduct += '</div>';

     document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();
    
}

listLocal();


