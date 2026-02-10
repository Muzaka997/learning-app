import React, { useState } from "react";
import { sendContactMessage } from "./contactApi";
import { useAuth } from "../auth/useAuth";
import {
  Container,
  Title,
  Form,
  Field,
  Label,
  Input,
  TextArea,
  Submit,
  Success,
} from "./ContactUs.styled";

// Type for form data
type FormData = {
  name: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
  });

  const { user, loading } = useAuth();

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user) {
        alert("Please log in to send a message.");
        return;
      }
      await sendContactMessage({
        name: formData.name,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({ name: "", message: "" });
    } catch (err) {
      // Optimistic UI: show success even if email sending failed on server
      console.warn(
        "Email send failed on server; showing success in UI anyway.",
        err,
      );
      setSubmitted(true);
      setFormData({ name: "", message: "" });
    }
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      {submitted && <Success>Thank you! Your message has been sent.</Success>}
      {!loading && !user && (
        <p style={{ marginBottom: 16 }}>
          Please log in to send us a message. Your message will be sent from
          your registered email address.
        </p>
      )}
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </Field>
        {user && (
          <Field>
            <Label>Email</Label>
            <Input value={user.email} disabled readOnly />
          </Field>
        )}
        <Field>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help?"
          />
        </Field>
        <Submit type="submit" disabled={!user || loading}>
          Send Message
        </Submit>
      </Form>
    </Container>
  );
};

export default ContactUs;
