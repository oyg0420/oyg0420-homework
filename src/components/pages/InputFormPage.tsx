import InputForm from 'components/modules/InputForm';
import Button from 'components/modules/InputForm/Button';
import TextareaController from 'components/modules/InputForm/TextareaController';
import { useForm } from 'components/modules/InputForm/hook/useForm';
import styled from 'styled-components';

const InputFormPageContainer = styled.div`
  padding: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  flex: 1;
`;

type FormType = {
  defaultMode: string;
};

type VariatyFormType = {
  placeholderMode: string;
  disabledMode: string;
  readonlyMode: string;
};

const InputFormPage: React.FC = () => {
  const { register, formState } = useForm<FormType>({
    defaultMode: '기본 값',
  });

  const { register: registerVariaty } = useForm<VariatyFormType>({
    placeholderMode: '',
    disabledMode: '주문 요청사항 입력해주세요.',
    readonlyMode: '오직 읽기만 가능합니다.',
  });

  return (
    <InputFormPageContainer>
      <InputForm>
        <FlexBox>
          <TextareaController
            {...register('defaultMode', {
              rules: {
                maxLength: 100,
              },
            })}
          />
          <Button type="submit" disabled={!formState.isDirty}>
            Save
          </Button>
        </FlexBox>
      </InputForm>
      <InputForm>
        <TextareaController
          placeholder="값이 존재하지 않습니다."
          {...registerVariaty('placeholderMode', {
            rules: {
              maxLength: 50,
            },
          })}
        />
        <TextareaController
          {...registerVariaty('disabledMode', {
            rules: {
              maxLength: 500,
            },
          })}
          disabled
        />
        <TextareaController
          {...registerVariaty('readonlyMode', {
            rules: {
              maxLength: 500,
            },
          })}
          readOnly
        />
      </InputForm>
    </InputFormPageContainer>
  );
};

export default InputFormPage;
