//Khai báo sd module HTTP
var http = require('http');
//Khai báo sd module fs
var fs = require('fs');
//Khởi tạo server chạy cổng 8000
http.createServer(function(req, res){
    //Định dạng response head trả về
    res.writeHead(200, {'content-type': 'text/html'});
    //Đọc file code.html encode utf8
    fs.readFile('docfilehtml.html', 'utf8', function(err, data){  //chỉ cần docfile
        if (err) throw err;
        //in ra nội dung đọc dc
        res.write(data);
        //Kết thúc response
        res.end();
    });
}).listen(8081); 