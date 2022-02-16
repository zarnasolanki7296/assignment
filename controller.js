var Coursedb = require('../model/model');

// create and save new course
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new course
    const course = new Coursedb({
        coursename: req.body.coursename,
        courseduration : req.body.corseduration,
        coursefees:req.body.coursefees,
    })

    // save course in the database
    course
        .save(course)
        .then(data => {
            //res.send(data)
            res.redirect('/add-course');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}