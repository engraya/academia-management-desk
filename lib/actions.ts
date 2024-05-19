"use server";

import { revalidatePath } from "next/cache";
import { Student, Staff, Alumni } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addStudent = async (formData: FormData) => {
  const { firstname, lastname, admissionYear, class: studentClass, gender, age, dateOfBirth } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newStudent = new Student({
      firstname,
      lastname,
      admissionYear,
      class: studentClass,
      gender,
      age,
      dateOfBirth,
    });

    await newStudent.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create student!");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
};

export const updateStudent = async (formData: FormData) => {
  const { id, firstname, lastname, admissionYear, class: studentClass, gender, age, dateOfBirth } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      firstname,
      lastname,
      admissionYear,
      class: studentClass,
      gender,
      age,
      dateOfBirth,
    };

    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Student.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update student!");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
};

export const addStaff = async (formData: FormData) => {
  const { firstname, lastname, gender, dateJoined, role, phoneNumber, email } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newStaff = new Staff({
      firstname,
      lastname,
      gender,
      dateJoined,
      role,
      phoneNumber,
      email,
    });

    await newStaff.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create staff!");
  }

  revalidatePath("/dashboard/staff");
  redirect("/dashboard/staff");
};

export const updateStaff = async (formData: FormData) => {
  const { id, firstname, lastname, gender, dateJoined, role, phoneNumber, email } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      firstname,
      lastname,
      gender,
      dateJoined,
      role,
      phoneNumber,
      email,
    };

    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Staff.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update staff!");
  }

  revalidatePath("/dashboard/staff");
  redirect("/dashboard/staff");
};

export const addAlumni = async (formData: FormData) => {
  const { firstname, lastname, gender, dateOfBirth, state, phoneNumber, email, admissionYear, graduationYear, profession } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newAlumni = new Alumni({
      firstname,
      lastname,
      gender,
      dateOfBirth,
      state,
      phoneNumber,
      email,
      admissionYear,
      graduationYear,
      profession,
    });

    await newAlumni.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create alumni!");
  }

  revalidatePath("/dashboard/alumni");
  redirect("/dashboard/alumni");
};

export const updateAlumni = async (formData: FormData) => {
  const { id, firstname, lastname, gender, dateOfBirth, state, phoneNumber, email, admissionYear, graduationYear, profession } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      firstname,
      lastname,
      gender,
      dateOfBirth,
      state,
      phoneNumber,
      email,
      admissionYear,
      graduationYear,
      profession,
    };

    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Alumni.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update alumni!");
  }

  revalidatePath("/dashboard/alumni");
  redirect("/dashboard/alumni");
};

export const deleteStudent = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Student.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete student!");
  }
  revalidatePath("/dashboard/students");
};

export const deleteStaff = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Staff.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete staff!");
  }
  revalidatePath("/dashboard/staff");
};

export const deleteAlumni = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Alumni.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete alumni!");
  }
  revalidatePath("/dashboard/alumni");
};
