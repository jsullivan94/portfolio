import { Schema, model } from 'mongoose';

const projectSchema = Schema(
    {}
)

const Project = model('Project', projectSchema);

export default Project;