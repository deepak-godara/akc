import React, { useState } from "react";
import styled from "styled-components";
import FormHeadings from "../FormHeadings";
import Text from "@lib/microComponents/Text";
import { Formik } from "../../main";
import FormInputWithEuroIcon from "../FormInputWithEuroIcon";
import DatePicker from "@lib/microComponents/DatePicker";
import { FaCalendarDays } from "react-icons/fa6";
import BooleanSelector from "./BooleanSelector";
import { AVAILABLE_FROM, AVAILABLE_UPTO } from "../../validationSchema";
import { format } from "date-fns";
// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const InputsContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr);
  column-gap: 1.9375rem;
  margin-top: 1.5625rem;
  row-gap: 1.8125rem;
`;
const CellContainer = styled.div``;
const InputLabel = styled.label``;
const InputContainer = styled.div`
  width: 100%;
  height: 2.9375rem;
  margin-top: 0.625rem;
  border-radius: 10px;
`;
const DatePickerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const DatePickerButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 1.25rem;
  color: ${(props) => props.theme.colors.gray[600]};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const DatePickerStyled = styled(DatePicker)`
  position: absolute;
  z-index: 2000;
`;
const DatePickerText = styled(Text)`
  color: ${(props) => props.theme.colors.gray[600]};
`;
const DatePickerIcon = styled(FaCalendarDays)`
  height: 1.125rem;
  width: 1rem;
  color: ${(props) => props.theme.colors.gray[800]};
  margin-right: 1.125rem;
`;
// ---------------------

function KnowledgeGuide({ formik }: { formik: Formik }) {
  const [available, setAvailable] = useState<boolean>(true);
  const [showFromDatePicker, setShowFromDatePicker] = useState<boolean>(false);
  const [showToDatePicker, setShowToDatePicker] = useState<boolean>(false);
  return (
    <Container>
      <FormHeadings>Knowlege Guide</FormHeadings>
      <InputsContainer>
        <CellContainer>
          <InputLabel>
            <Text>Available?</Text>
          </InputLabel>
          <InputContainer>
            <BooleanSelector
              formik={formik}
              name="studyGuideAvailable"
              onChange={(e) => setAvailable(e)}
            />
          </InputContainer>
        </CellContainer>
        {available && (
          <>
            <CellContainer>
              <FormInputWithEuroIcon
                id="guidePrice"
                name="guidePrice"
                placeholder="Type here..."
                formik={formik}
                min={0}
                label="Price"
                disabled={!available}
              ></FormInputWithEuroIcon>
            </CellContainer>
            <div className="placeholder for empty elements in grid"></div>
            <div className="placeholder for empty elements in grid"></div>
            <CellContainer>
              <InputLabel>
                <Text>Available From</Text>
              </InputLabel>
              <InputContainer>
                <DatePickerContainer>
                  <DatePickerButton
                    type="button"
                    onClick={() => {
                      setShowFromDatePicker(!showFromDatePicker);
                    }}
                    disabled={!available}
                  >
                    <DatePickerIcon />
                    <DatePickerText>
                      {" "}
                      {formik.getFieldProps(AVAILABLE_FROM).value
                        ? format(
                            formik.getFieldProps(AVAILABLE_FROM).value,
                            "PP"
                          )
                        : "Select a date"}
                    </DatePickerText>
                  </DatePickerButton>
                  {available && showFromDatePicker && (
                    <DatePickerStyled
                      value={formik.getFieldProps(AVAILABLE_FROM).value}
                      setShow={setShowFromDatePicker}
                      onChange={(e) => {
                        formik.setFieldValue(AVAILABLE_FROM, e);
                      }}
                    />
                  )}
                </DatePickerContainer>
              </InputContainer>
            </CellContainer>
            <CellContainer>
              <InputLabel>
                <Text>Available Until</Text>
              </InputLabel>
              <InputContainer>
                <DatePickerContainer>
                  <DatePickerButton
                    type="button"
                    onClick={() => {
                      setShowToDatePicker(!showToDatePicker);
                    }}
                    disabled={!available}
                  >
                    <DatePickerIcon />
                    <DatePickerText>
                      {formik.getFieldProps(AVAILABLE_UPTO).value
                        ? format(
                            formik.getFieldProps(AVAILABLE_UPTO).value,
                            "PP"
                          )
                        : "Select a date"}
                    </DatePickerText>
                  </DatePickerButton>
                  {available && showToDatePicker && (
                    <DatePickerStyled
                      value={formik.getFieldProps(AVAILABLE_UPTO).value}
                      setShow={setShowToDatePicker}
                      onChange={(e) => {
                        formik.setFieldValue(AVAILABLE_UPTO, e);
                      }}
                    />
                  )}
                </DatePickerContainer>
              </InputContainer>
            </CellContainer>
            <CellContainer>
              <InputLabel>
                <Text>Sell Individually?</Text>
              </InputLabel>
              <InputContainer>
                <BooleanSelector
                  disabled={!available}
                  formik={formik}
                  name="sell-individually"
                />
              </InputContainer>
            </CellContainer>
          </>
        )}
      </InputsContainer>
    </Container>
  );
}

export default KnowledgeGuide;
