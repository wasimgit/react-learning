import { useState } from 'react';
import styled from 'styled-components';

const InputSideWrapper = styled.form`
  height: auto;
  padding-bottom: 100px;
  position: relative;
  padding: 10px 10px 100px 10px;
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 8px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const SubMitButton = styled.input`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px 12px 24px;
  cursor: pointer;
`;

export default function InputSide() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ message, setMessage ] = useState('')

  function handleName(e) {
    setName(e.target.name)
  }

  function handleEmail(e) {
    setEmail(e.target.email)
  }
  function handlePhone(e) {
    setPhone(e.target.phone)
  }
  function handleMessage(e) {
    setMessage(e.target.message)
  }

  function handleSubmit() {
    console.log(name, email, phone, message);
  }

  return (
    <InputSideWrapper>
      <InputWrapper>
        <p>Name</p>
        <Input type="text" placeholder="Allen Jones" onChange={handleName} />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input type="email" placeholder="aljay126@gmail.com" onChange={handleEmail} />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input type="number" placeholder="+233546227893" onChange={handlePhone} />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput placeholder="Write your message" onChange={handleMessage} />
      </InputWrapper>
      <SubMitButton onClick={() => handleSubmit()} value="Send Message" />
    </InputSideWrapper>
  );
};