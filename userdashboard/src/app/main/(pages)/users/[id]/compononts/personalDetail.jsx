import { useSelector } from "react-redux";
import { React, useState } from "react";
import InputTextField from "@/components/InputTextField";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { updateUser } from "@/store/slices/userSlice";
export default function PersonalDetail() {
  const user = useSelector((state) => state.users.selectedUser);
  console.log(user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: user.id,
    firstName: user.firstName,

    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    age: user.age,
    gender: user.gender,
    username: user.username,
    password: user.password,
    birthDate: user.birthDate,
    ip: user.ip,
    macAddress: user.macAddress,
    univercity: user.university,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(updateUser(form));
    console.log("Submitted Data", form);
    e.preventDefault(); // prevent page refresh

    router.back();
    // You can send this to backend via API
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputTextField
        label="First Name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="Enter first name"
        required={false}
      />
      <InputTextField
        label="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
      />
      <InputTextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email address"
      />
      <InputTextField
        label="Mobile"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="Age"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="Gender"
        name="gender"
        value={form.gender}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="Birth Date"
        name="birthdate"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="IP address"
        name="ip"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="MAC address"
        name="macAddress"
        value={form.macAddress}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <InputTextField
        label="Univercity"
        name="univercity"
        value={form.univercity}
        onChange={handleChange}
        placeholder="Enter Mobile number"
      />
      <div className="col-span-2">
        <button type="submit" className=" default-button">
          Save Changes
        </button>
      </div>
    </form>
  );
}
