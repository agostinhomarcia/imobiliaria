import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 2rem auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333; // Define a cor do texto para um cinza escuro para melhor contraste
`;


const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px; 
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const validateEmail = (email: string) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    const validateForm = () => {
      let tempErrors = { name: '', email: '', message: '' };
      let isValid = true;
  
      if (!name) {
        tempErrors.name = 'Name is required';
        isValid = false;
      }
      if (!email) {
        tempErrors.email = 'Email is required';
        isValid = false;
      } else if (!validateEmail(email)) {
        tempErrors.email = 'Email is not valid';
        isValid = false;
      }
      if (!message) {
        tempErrors.message = 'Message is required';
        isValid = false;
      }
  
      setErrors(tempErrors);
      return isValid;
    };
  

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form is valid');
      } else {
        console.log('Form has errors');
      }
    };
  
    return (
      <ContactContainer>
        <h1>Contact Us</h1>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {errors.name && <p>{errors.name}</p>}
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <p>{errors.email}</p>}
          </FormField>
          <FormField>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
            {errors.message && <p>{errors.message}</p>}
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    );
  };

export default Contact;
