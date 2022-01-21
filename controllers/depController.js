// const res = require("express/lib/response");
const { Dep } = require("../models/index");

exports.getDep = async (req, res) => {
    const deps = await Dep.findAll()
        .then((deps) => {
            res.render('departement',{ deps });
})
    .catch((err) => {
    res.send({ status: 400, message: err });
});
};

exports.createDep = async (req, res) => { 
    const name = req.body.name
    const description = req.body.desc
    // const { name, desc } = req.body
    await Dep.create({
        name : name, description: description
    })
        .then((dep) => {
            res.redirect('/dep');
    return res.send(dep)
})
    .catch((err) => {
    res.send({ status: 400, message: err });
});
};

// Update Departement
exports.updateDep = async (req, res) => {
    const deps = await Dep.update({where: { id : req.params.id} })
        .then((deps) => {
            res.json({ deps });
})
    .catch((err) => {
    res.send({ status: 400, message: err });
});
};
exports.deleteDep = async (req, res) => {
    const deps = await Dep.destroy({where: { id : req.params.id} })
        .then(() => {
            res.json({ deps });
})
    .catch((err) => {
    res.send({ status: 400, message: err });
});

};
