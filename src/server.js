const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express(); // trả về đối tượng để xây dựng lại web
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Using combined predefined format, http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//req = request : chứa tất cả thông tin yêu cầu gửi đi(path, đường dẫn, phương thức, thông tin liên quan trong header) yêu cầu về phía server
//res = response : server nhận request -> xử lý (trả về client các dữ liệu) tùy chọn setup về client(trả về cái gì?)

//Routes init  (khởi tạo tuyến đường)
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
