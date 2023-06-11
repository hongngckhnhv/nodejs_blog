const path= require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express() // trả về đối tượng để xây dựng lại web 
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))

// Using combined predefined format, http logger
app.use(morgan("combined"));

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
//req = request : chứa tất cả thông tin yêu cầu gửi đi(path, đường dẫn, phương thức, thông tin liên quan trong header) yêu cầu về phía server
//res = response : server nhận request -> xử lý (trả về client các dữ liệu) tùy chọn setup về client(trả về cái gì?)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})