var male = [
    {
        id:"KO0002",
        prdname:"Quần short Khaki (Đen)",
        discount:269.000,
        price:250.000,
        url:"img/QuanShortKhakiDen.jpg",
    },
    {
        id:"VN0002",
        prdname:"Quần baggy đen sang trọng",
        discount:249.000,
        price:398.000,
        url:"img/QuanBaggy.jpg",
    },
    {
        id:"UK0002",
        prdname:"Quần dài khaki",
        discount:159.000,
        price:300.000,
        url:"img/QuanDaiKhaki.jpg",
    },
    {
        id:"US0002",
        prdname:"Quần short Khaki",
        discount:159.000,
        price:300.000,
        url:"img/QuanShortKhaki.jpg",
    },
    
];

html = '';
for(var i in male) {
    html+=
    `   
        <div class="w-full h-[36rem] rounded-lg border-2 bg-white">
            <div class="w-auto h-[25rem] rounded-lg">
                <img src="${male[i].url}" alt="" class="w-full h-full object-cover rounded-t-md">
            </div>
            <div class="flex flex-col p-4 space-y-5">
                <span class="text-xl font-semibold">${male[i].prdname} </span>
                <span class="text-lg">${male[i].price.toFixed(3)} vnđ</span>
                <button class="mr-auto text-lg text-white bg-red-600 rounded p-1 px-4 hover:opacity-80">Đặt Mua</button>
            </div>
        </div>
    `
}
document.querySelector('#cardmale').innerHTML = html;