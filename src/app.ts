import * as express from "express"
import * as bodyParser from "body-parser"
import * as userController from "./controller/userController"

const app = express();
app.set("port",3000);
app.use(bodyParser.json());

app.use(function (err:any, req:any, res:any, next:any){
    if (err instanceof SyntaxError){
        res.send("Invalid Request");
    }else{
        next ();
    }
});

app.get('/', (req:any, res:any) => {
    res.send("Welcome to User REST API");
});

app.get('/users', userController.allUsers);
app.get('/user/:id', userController.getUser);
app.put('/user', userController.addUser);
app.delete('/user/:id', userController.deleteUser);
app.post('/user/:id', userController.updateUser);

app.listen(app.get("port"), () => {
    console.log("User REST API app is running");
})