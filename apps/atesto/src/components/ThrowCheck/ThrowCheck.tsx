import { useState } from 'react';

import {
  Box,
  Checkbox,
  MenuItem,
  Select,
  TextareaAutosize,
} from '@mui/material';

import { ReactComponent as IconFilterSelect } from '../../assets/images/icons/icon_filter_select.svg';
import { LocaleBr } from '../../locale';
import { NotesConsultationProps } from '../../screens/NoteConsultation/NoteConsultation';
import { Colors } from '../../styles/themes';
import Buttons from '../Buttons/Buttons';

import { mockSelectFilterDependency } from './mock';
import { Container, Content, Text, Title, Wrapper } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThrowCheckProps {}

export function ThrowCheck(props: ThrowCheckProps) {
  const [answer, setAnswer] = useState('');
  // step 1 check
  const [checkNumberNote, setCheckNumberNote] = useState(false);
  const [checkValueNote, setCheckValueNote] = useState(false);
  const [checkItems, setCheckItems] = useState(false);
  const [checkCountItems, setCheckCountItems] = useState(false);
  const [checkAddressDelivery, setCheckAddressDelivery] = useState(false);
  // step 2 check
  const [checkrepresentativeSignature, setCheckRepresentativeSignature] =
    useState(false);
  const [checkinstitutionStamp, setCheckInstitutionStamp] = useState(false);
  const [checkReceivingDate, setCheckReceivingDate] = useState(false);
  // step 3 check
  const [checkinconsistencyOn, setCheckInconsistencyOn] = useState(false);
  const [checkinconsistencyOff, setCheckInconsistencyOff] = useState(false);

  const Placeholder: React.FC<NotesConsultationProps> = ({ children }) => {
    return <div style={styles.placeholder}>{children}</div>;
  };

  const renderSelectFilter: () => JSX.Element[] = () => {
    return mockSelectFilterDependency.map((dt, i) => {
      return (
        <MenuItem style={styles.selectMenu} key={i} value={dt.value}>
          {dt.label}
        </MenuItem>
      );
    });
  };

  const handleChangeInconsistencyOn = () => {
    if (!checkinconsistencyOn) {
      setCheckInconsistencyOn(true);
      setCheckInconsistencyOff(false);
    } else {
      setCheckInconsistencyOn(false);
    }
  };

  const handleChangeInconsistencyOff = () => {
    if (!checkinconsistencyOff) {
      setCheckInconsistencyOff(true);
      setCheckInconsistencyOn(false);
    } else {
      setCheckInconsistencyOff(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title> {LocaleBr.throwCheck.titleCheckInformation} </Title>

        <Content>
          <Checkbox
            onChange={() =>
              checkNumberNote
                ? setCheckNumberNote(false)
                : setCheckNumberNote(true)
            }
            checked={checkNumberNote}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.numberNote}</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkValueNote
                ? setCheckValueNote(false)
                : setCheckValueNote(true)
            }
            checked={checkValueNote}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.valueNote}</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkItems ? setCheckItems(false) : setCheckItems(true)
            }
            checked={checkItems}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.items}</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkCountItems
                ? setCheckCountItems(false)
                : setCheckCountItems(true)
            }
            checked={checkCountItems}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.countItems}</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkAddressDelivery
                ? setCheckAddressDelivery(false)
                : setCheckAddressDelivery(true)
            }
            checked={checkAddressDelivery}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.addressDelivery}</Text>
        </Content>

        <Title> {LocaleBr.throwCheck.titleCorrectData} </Title>

        <Content>
          <Checkbox
            onChange={() =>
              checkrepresentativeSignature
                ? setCheckRepresentativeSignature(false)
                : setCheckRepresentativeSignature(true)
            }
            checked={checkrepresentativeSignature}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.representativeSignature}</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkinstitutionStamp
                ? setCheckInstitutionStamp(false)
                : setCheckInstitutionStamp(true)
            }
            checked={checkinstitutionStamp}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.institutionStamp}</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkReceivingDate
                ? setCheckReceivingDate(false)
                : setCheckReceivingDate(true)
            }
            checked={checkReceivingDate}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.receivingDate}</Text>
        </Content>

        <Title> {LocaleBr.throwCheck.titleInconsistency} </Title>

        <Box sx={styles.checkbox}>
          <Content>
            <Checkbox
              onChange={handleChangeInconsistencyOn}
              checked={checkinconsistencyOn}
              sx={{
                color: Colors.font.default,
                '&.Mui-checked': {
                  color: Colors.font.default,
                },
              }}
            />
            <Text>{LocaleBr.throwCheck.lblCheck.inconsistencyOn}</Text>
          </Content>

          <Content>
            <Checkbox
              onChange={handleChangeInconsistencyOff}
              checked={checkinconsistencyOff}
              sx={{
                color: Colors.font.default,
                '&.Mui-checked': {
                  color: Colors.font.default,
                },
              }}
            />
            <Text>{LocaleBr.throwCheck.lblCheck.inconsistencyOff}</Text>
          </Content>
        </Box>
        <Content>
          <Box sx={styles.boxFooter}>
            <Box sx={styles.boxDependency}>
              {checkinconsistencyOn && (
                <>
                  <Select
                    displayEmpty={true}
                    value={answer}
                    IconComponent={IconFilterSelect}
                    sx={styles.filter}
                    onChange={(event) => setAnswer(event.target.value)}
                    renderValue={
                      answer !== ''
                        ? undefined
                        : () => (
                            <Placeholder>
                              {LocaleBr.throwCheck.typeDependency}
                            </Placeholder>
                          )
                    }
                  >
                    {renderSelectFilter()}
                  </Select>
                  {answer !== '' && (
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={6}
                      defaultValue="Escreva qual a inconsistência:"
                      style={styles.textArea}
                    />
                  )}
                </>
              )}
            </Box>

            <Box sx={styles.boxButton}>
              <Buttons textButton={LocaleBr.throwAttest.confirm} />
            </Box>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default ThrowCheck;

const styles = {
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    width: 400,
  },
  filter: {
    fontSize: '16px',
    fontFamily: 'Inter-Light',
    backgroundColor: Colors.neutral[100],
    height: '36px',
    width: '300px',
    marginRight: '20px',
    color: Colors.brand.default,
    '&::placeholder': {
      fontFamily: 'Inter-Light',
      fontSize: '20px',
      color: Colors.font.default,
    },
  },
  placeholder: {
    fontFamily: 'Inter-Light',
    fontSize: '16px',
    color: Colors.font.default,
  },
  selectMenu: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: '16px',
  },
  boxFooter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  boxDependency: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
  },
  boxButton: {
    display: 'flex',
    width: '30%',
    justifyContent: 'center',
    marginTop: '8%',
  },
  textArea: {
    marginTop: 10,
    padding: 10,
    width: 600,
    borderWidth: 2,
    borderColor: Colors.neutral[600],
    fontFamily: 'Inter-Bold',
    fontSize: '16px',
  },
};
