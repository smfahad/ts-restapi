import {Request, Response} from 'express';
import User from './../user'

// Get all users
export let allUsers = (req: Request, res: Response) => {
    let users = User.find((err:any, users:any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(users);
        }
    })
}

// Get single user
export let getUser = (req: Request, res: Response) => {
    User.findById(req.params.id, (err:any,user:any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(user);
        }
    })
}

// Add User
export let addUser = (req: Request, res: Response) => {
    let user = new User(req.body);
    user.save((err:any)=> {
        if(err) {
            res.send(err);
        } else {
            res.send(user);
        }
    })
}

// Delete User
export let deleteUser = (req: Request, res: Response) => {
    User.deleteOne({_id: req.params.id}, (err:any) => {
        if(err) {
            res.send(err);
        } else {
            res.send("Deleted successfully");
        }
    })
}

// Update User
export let updateUser = (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err:any,user:any) => {
        if(err) {
            res.send(err);
        } else {
            res.send("Update Successfully");
        }
    })
}