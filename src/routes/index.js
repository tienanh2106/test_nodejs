
const newRouter = require('./news');
const siteRouter = require('./site'); 
const userRouter = require('./users');

function route(app) {
  

    app.use('/user', userRouter);

    app.use('/news', newRouter);
    


    
    app.use('/', siteRouter);

    
}

module.exports = route;