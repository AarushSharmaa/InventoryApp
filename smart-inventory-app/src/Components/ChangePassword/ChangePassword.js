import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    console.log("change password clicked");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3030/AuthorisedPersonnel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentPassword, newPassword }),
        }
      );

      // if the response message is 200 OK
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Container className="text-center mt-5">
      {showForm ? (
        <Form onSubmit={handleChangePassword}>
          <FormGroup>
            <Label htmlFor="currentPassword">Current Password:</Label>
            <Input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">New Password:</Label>
            <Input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" onClick={handleChangePassword}>
            Change Password
          </Button>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}
        </Form>
      ) : (
        <Button color="primary" onClick={() => setShowForm(true)}>
          Change Password
        </Button>
      )}
    </Container>
  );
};

export default ChangePassword;
