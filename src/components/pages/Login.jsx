import React, { useState, useMemo } from "react";
import { Box, Button, TextField } from "@mui/material";

const Login = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    message: "",
  });

  const emailValidation = useMemo(() => {
    return (email) => {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return regex.test(email);
    };
  }, []);

  const passwordValidation = useMemo(() => {
    return (password) => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
      return regex.test(password);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = emailValidation(email);
    const isValidPassword = passwordValidation(password);

    setError({
      emailError: !isValidEmail,
      passwordError: !isValidPassword,
      message: isValidEmail
        ? ""
        : "El email no es válido" ||
          (isValidPassword
            ? ""
            : "La contraseña debe tener al menos 5 caracteres entre números y letras, sin caracteres especiales ni espacios"),
    });

    if (isValidEmail && isValidPassword) {
      setError({
        emailError: false,
        passwordError: false,
        message: "",
      });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          required
          fullWidth
          error={error.emailError}
          helperText={error.emailError && error.message}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          value={password}
          required
          fullWidth
          error={error.passwordError}
          helperText={error.passwordError && error.message}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Iniciar Sesión
        </Button>
      </Box>
    </div>
  );
});

export default Login;
