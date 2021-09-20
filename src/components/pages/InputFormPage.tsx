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
    defaultMode: '기본 값입니다.',
  });

  const { register: registerVariaty } = useForm<VariatyFormType>({
    placeholderMode: '',
    disabledMode: '주문 요청사항 입력해주세요.',
    readonlyMode: '오직 읽기만 가능합니다.',
  });

  return (
    <InputFormPageContainer>
      <h1>과제2</h1>
      <InputForm>
        <h4>입력 중 상태 - 내용 변경 시 Save 버튼이 활성화 됩니다. (내용이 초기 값과 같으면 Save 버튼 비활성화)</h4>
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
        <h4> default 상태 - 내용이 없으면 placeholder 처리</h4>
        <TextareaController
          placeholder="값이 존재하지 않습니다."
          {...registerVariaty('placeholderMode', {
            rules: {
              maxLength: 50,
            },
          })}
        />
        <h4> disabled 비활성화 상태 - 입력 불가 상태</h4>
        <TextareaController
          {...registerVariaty('disabledMode', {
            rules: {
              maxLength: 500,
            },
          })}
          disabled
        />
        <h4>readonly 읽기 전용 상태 - 입력 불가</h4>
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
