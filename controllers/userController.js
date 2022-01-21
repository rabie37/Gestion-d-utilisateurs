// const res = require("express/lib/response");
const { User, Dep } = require("../models/index");
const DepsRouter = require("../router/dep");

exports.getUser = async (req, res) => {
    const users = await User.findAll()
    .catch((err) => {
            res.send({ status: 400, message: err });
        });
    const deps = await Dep.findAll()   
    res.render('users',{ users, deps }); 

};

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body
    await User.create({
        username, email, password
    })
        .then((user) => {
            res.redirect('/user');
            return res.send(user)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
//where : id : req.params.id
exports.updateUser = async (req, res) => {
    const users = await User.update({ where: { id: req.params.id } })
        .then((users) => {
            res.json({ users });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
exports.deleteUser = async (req, res) => {
    const users = await User.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.json({ users });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });

};