import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const setContact = props.setContact;
  const handleChange = () => {};
  return (
    <select name="" id="" onChange={(e) => props.setContact(e.target.value)}>
      <option value=""></option>
      {contacts.map((contact) => (
        <option value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};
