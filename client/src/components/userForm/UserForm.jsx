import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  InfoDiv,
  Input,
  Label,
  Select,
} from "./style";

const UserForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InfoDiv>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Middle Name</Label>
            <Input {...register("middleName")} />
          </FormGroup>

          <FormGroup>
            <Label>Last Name</Label>
            <Input
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </FormGroup>
        </InfoDiv>
        <InfoDiv>
          <FormGroup>
            <Label>Gender</Label>
            <Select {...register("gender", { required: "Gender is required" })}>
              <option value=''>Select Blood Group</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </Select>
            {errors.gender && (
              <ErrorMessage>{errors.gender.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Date of Birth</Label>
            <Input
              type='date'
              {...register("dob", {
                required: "Date of Birth is required",
              })}
            />
            {errors.dob && <ErrorMessage>{errors.dob.message}</ErrorMessage>}
          </FormGroup>
        </InfoDiv>
        <InfoDiv>
          <FormGroup>
            <Label>Father's Name</Label>
            <Input
              {...register("fatherName", {
                required: "Father's Name is required",
              })}
            />
            {errors.fatherName && (
              <ErrorMessage>{errors.fatherName.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Mother's Name</Label>
            <Input
              {...register("motherName", {
                required: "Mother's Name is required",
              })}
            />
            {errors.motherName && (
              <ErrorMessage>{errors.motherName.message}</ErrorMessage>
            )}
          </FormGroup>
        </InfoDiv>
        <InfoDiv>
          <FormGroup>
            <Label>Address</Label>
            <Input
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Caste</Label>
            <Input {...register("caste", { required: "Caste is required" })} />
            {errors.caste && (
              <ErrorMessage>{errors.caste.message}</ErrorMessage>
            )}
          </FormGroup>
        </InfoDiv>
        <InfoDiv>
          <FormGroup>
            <Label>Religion</Label>
            <Input
              {...register("religion", { required: "Religion is required" })}
            />
            {errors.religion && (
              <ErrorMessage>{errors.religion.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Blood Group</Label>
            <Select
              {...register("bloodGroup", {
                required: "Blood Group is required",
              })}
            >
              <option value=''>Select Blood Group</option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
            </Select>
            {errors.bloodGroup && (
              <ErrorMessage>{errors.bloodGroup.message}</ErrorMessage>
            )}
          </FormGroup>
        </InfoDiv>
        <Button type='submit'>Submit</Button>
      </form>
    </FormContainer>
  );
};

export default UserForm;
