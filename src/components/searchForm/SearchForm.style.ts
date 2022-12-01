import styled from "styled-components";

export const Form = styled.form``;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const BoxInput = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: calc(50% - 52px);
  font-size: 15px;
  line-height: 22px;
  padding: 9px 11px 7px 39px;
  border-radius: 4px;
  border: 1px solid #a6a7a8;
  margin-bottom: 12px;

  &:focus {
    outline: none;
  }
`;

export const IconSearch = styled.svg`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 16px;
  height: 16px;
  fill: #000;
`;

export const BoxRario = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const LabelRadio = styled.label`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin: 0 12px 0 8px;
`;

export const InputRadio = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0;
`;
