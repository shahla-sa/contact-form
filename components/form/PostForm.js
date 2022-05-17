import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import PostContext from "../../store/post/PostContext";
import styles from "./PostForm.module.scss";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addPost(form);
      e.target.reset();
    }
  };
  const validate = () => {
    const { name, mobile, description } = form;
    const newErrors = {};
    if (!name || name === "") newErrors.name = "Please enter your name!";
    if (!mobile || mobile === "")
      newErrors.mobile = "Please enter your number!";
    if (!description || description === "")
      newErrors.description = "please enter your description!";

    return newErrors;
  };
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  return (
    <dic className={styles.wrapper}>
      <h4 className={styles.title}>Add post</h4>
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            isInvalid={!!errors.name}
            onChange={(e) => setField("name", e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your mobile"
            isInvalid={!!errors.mobile}
            onChange={(e) => setField("mobile", e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errors.mobile}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            isInvalid={!!errors.description}
            onChange={(e) => setField("description", e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </dic>
  );
};

export default PostForm;
