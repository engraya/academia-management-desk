import mongoose from "mongoose";

// Alumni Schema
const alumniSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    admissionYear: {
      type: Number,
      required: true,
    },
    graduationYear: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Student Schema
const studentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    admissionYear: {
      type: Number,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// Staff Schema
const staffSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    gender: {
      type: String,
      required: true,
    },
    dateJoined: {
      type: Date,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Alumni = mongoose.models.Alumni || mongoose.model("Alumni", alumniSchema);
export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
export const Staff = mongoose.models.Staff || mongoose.model("Staff", staffSchema);
