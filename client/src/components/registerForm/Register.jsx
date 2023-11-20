import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  Label,
  SubmitButton,
} from "./style";
import { useRegisterUserMutation } from "../../store/api/userapi";
import ButtonLoader from "../loading/ButtonLoader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit, formState, watch, reset } = useForm();
  const [addUser, results] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const { isLoading, isError, error, data } = results;
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = (data) => {
    addUser(data);
  };
  useEffect(() => {
    if (data) {
      dispatch(setToken(data.token));
      navigate("/");
    }
  }, [data]);
  console.log(error)

  const password = watch("password");
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Username</Label>
        <Input
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}

        <Label>Email</Label>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          type='email'
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Label>Password:</Label>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type='password'
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Label>Re-enter Password</Label>
        <Input
          {...register("password_confirmation", {
            required: "Please re-enter your password",
            validate: (value) => value === password || "Password Don't Match",
          })}
          type='password'
        />
        {errors.reenterPassword && (
          <ErrorMessage>{errors.reenterPassword.message}</ErrorMessage>
        )}

        <SubmitButton type='submit'>
          {isLoading ? <ButtonLoader /> : "Register"}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default Register;
