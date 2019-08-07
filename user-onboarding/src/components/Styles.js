import styled from "styled-components";

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 250px;
  padding: 10px;

  button {
    outline: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    font-size: 1.5rem;
    margin: 10px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"], 
  .role-select{
    outline: none;
    border-radius: 5px;
    margin: 10px 0;
    width: 200px;
    height: 30px;
  }

  input[type="checkbox"] {
    outline: none;
    border-radius: 5px;
    width: 15px
    height: 15px;
  }


  label {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  h1 {
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
