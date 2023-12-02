const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
    {}
)



const Project = mongoose.model('Product', projectSchema)

module.exports = Project