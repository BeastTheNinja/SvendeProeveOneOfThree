import {
  useState,
} from "react";
import type { FormEvent } from "react";

import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { login } from "../../services/auth.service";

function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const result = await login({
        username,
        password,
      });

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Login failed."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Loading message="Logging in..." />
    );
  }

  return (
    <section>
      <h1>Login</h1>

      {error && (
        <ErrorMessage message={error} />
      )}

      <form onSubmit={handleSubmit}>

        <Input
          id="username"
          name="username"
          label="Username"
          type="text"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
          required
        />

        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          required
        />


        <Button type="submit">
          Login
        </Button>
      </form>
    </section>
  );
}

export default Login;
