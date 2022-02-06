import React, { useState, useContext } from "react";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => 
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
        .then(() => {
          navigate(ROUTES.BROWSE);
        }))
        .catch((error) => {
          setFirstName('')
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder="Password"
              value={password}
              type="password"
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit diabled={isInvalid} type="submit">
              Sign up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
