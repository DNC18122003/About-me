import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  githubUrl: { type: String },
  liveUrl: { type: String },
  category: { type: String, required: true },
  featured: { type: Boolean, default: false },
}, {
  timestamps: true
});

export default mongoose.model<IProject>('Project', ProjectSchema);
