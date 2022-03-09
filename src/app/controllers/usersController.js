const { connect } = require("../../routes/news");

class newController {

    index(req, res) {
        res.render('user');
    }

    post(req, res){
        const username = req.body.username;
        const password = req.body.password;
        // debug.connectDB().then((connection) => {
        //     console.log('connect thanh cong');
        //     connection.query(
        //         'select * from users',
        //         function(err ,data ,fields){
        //             console.log('data',data);
        //             db.closeDB(connection);
        //         }
        //     );
        // })
        // .catch((error) => {
        //     console.log('db not connected ',error);
        // });
        console.log('user : ',username);
        console.log('pass : ',password);
        res.render('user');
    }

    show(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        res.render('user'); 
        
    }
}


module.exports = new newController;


