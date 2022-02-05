import React, { useState } from "react";

import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";

export default function Signin() {
  const [emailAdress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const isInvalid = password === '' || emailAdress === '';

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAdress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
                Sign In
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
