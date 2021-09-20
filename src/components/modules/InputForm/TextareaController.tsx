import React, { TextareaHTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';

const TextareaControllerContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-height: 100px;
`;

const StyledTextarea = styled.textarea`
  display: flex;
  flex: 1;
  padding: 10px 20px 10px 10px;
  font-size: 12px;
  border: 1px solid gray;
  border-radius: 2px;

  :focus {
    outline: none !important;
    border: 1px solid skyblue;
  }

  :read-only {
    cursor: default;
    border: 1px solid gray;
  }

  :disabled {
    cursor: not-allowed;
    color: red;
  }
`;

const Count = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: gray;
  font-size: 12px;
`;

type TextareaControllerProps = TextareaHTMLAttributes<any> & {
  option?: {
    rules: {
      maxLength?: number;
    };
  };
};

const TextareaController: React.FC<TextareaControllerProps> = ({
  className,
  placeholder,
  value,
  option,
  disabled,
  readOnly,
  onChange,
}) => {
  const count = useMemo(() => {
    const nextValue = value ? value.toString() : '';
    const maxLength = option?.rules.maxLength || Infinity;
    if (maxLength && nextValue.length) {
      return maxLength - nextValue.length;
    }
    return maxLength;
  }, [value, option?.rules.maxLength]);

  return (
    <TextareaControllerContainer className={className}>
      <StyledTextarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
      />
      <Count>{count}</Count>
    </TextareaControllerContainer>
  );
};

export default styled(TextareaController)``;
