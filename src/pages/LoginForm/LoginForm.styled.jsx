import styled from 'styled-components';

export const SignUpForm = styled.form`
  width: 400px;
  padding: 15px;
  margin: 50px auto;
  background-color: #add8e6;

  box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
`;

export const Label = styled.div`
  text-decoration: none;
  padding: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 1px 6px rgba(24, 106, 112, 0.8),
    0px 1px 1px rgba(39, 63, 66, 0.16), 0px 2px 1px rgba(16, 93, 90, 0.16);
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2);
  &:hover {
    transform: translate(1px, 1px);
    cursor: pointer;
  }
  &:focus {
    transform: translate(1px, 1px);
    cursor: pointer;
  }
`;

export const MyStyledInput = styled.input`
  min-width: 380px;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    text-transform: uppercase;
  }
`;

export const Btn = styled.button`
  margin-top: 25px;
  font-size: 25px;
  width: 100%;
  padding: 3px;
  background-color: #fff;
  cursor: pointer;

  border-radius: 10px;
  &:hover {
    background-color: #7cb9e8;
    box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  }
`;
