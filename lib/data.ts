import { Student, Staff, Alumni } from "./models";
import { connectToDB } from "./utils";
import { Document } from 'mongoose';
import { Types } from "mongoose";

export const fetchStudents = async (q: string, page: number): Promise<{ count: number, students: Document[] }> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Student.countDocuments({ name: { $regex: regex } });
    const students = await Student.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, students };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Students Data!");
  }
};

export const fetchStudent = async (id: Types.ObjectId) => {
  try {
    connectToDB();
    const student = await Student.findById(id);
    return student;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Student Data!");
  }
};

export const fetchStaff = async (q: string, page: number): Promise<{ count: number, staff: Document[] }> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Staff.countDocuments({ name: { $regex: regex } });
    const staff = await Staff.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, staff };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Staff Data!");
  }
};

export const fetchStaffMember = async (id: Types.ObjectId) => {
  try {
    connectToDB();
    const staffMember = await Staff.findById(id);
    return staffMember;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Staff Data!");
  }
};

export const fetchAlumni = async (q: string, page: number): Promise<{ count: number, alumni: Document[] }> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Alumni.countDocuments({ name: { $regex: regex } });
    const alumni = await Alumni.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, alumni };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Alumni Data!");
  }
};

export const fetchAlumnus = async (id: Types.ObjectId) => {
  try {
    connectToDB();
    const alumnus = await Alumni.findById(id);
    return alumnus;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Alumni Data!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Employees",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
