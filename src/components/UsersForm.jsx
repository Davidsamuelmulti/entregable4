import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const UsersForm = ({ getUsers, userSelect, desSelectUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    if (userSelect) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, data)
        .then(() =>getUsers())
        .catch((error) => console.log(error.response?.data));
    } else {
      axios.post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response?.data));
    }
    clear()
  };
  useEffect(() => {
    if (userSelect) {
      reset(userSelect);
    } 
  }, [userSelect]);

  const clear= ()=>{
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    })
    desSelectUser();
   }

  return (
    <form className="card-form" onSubmit={handleSubmit(submit)}>
      <h1 className="title">New User</h1>
      <div className="input-container">
        <label htmlFor="first_name">firstName</label>
        <input
          type="text"
          {...register("first_name")}
          id="first_name"
          className="field"
        />
      </div>
      <div className="input-container">
        <label htmlFor="last_name">lastName</label>
        <input
          type="text"
          {...register("last_name")}
          id="last_name"
          className="field"
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">email</label>
        <input
          type="email"
          {...register("email")}
          id="email"
          className="field"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">password</label>
        <input
          type="password"
          {...register("password")}
          id="password"
          className="field"
        />
      </div>
      <div className="input-container">
        <label htmlFor="birthday">birthday</label>
        <input
          type="date"
          {...register("birthday")}
          id="birthday"
          className="field"
        />
      </div>
      <button className="btn">upload</button>
      <button className="btn" onClick={clear} type="button">clear</button>
    </form>
  );
};

export default UsersForm;
