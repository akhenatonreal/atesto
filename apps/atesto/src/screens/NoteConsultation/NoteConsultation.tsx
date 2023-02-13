import { useEffect, useState } from 'react';

import { Box, MenuItem, Select, TextField } from '@mui/material';

import { ReactComponent as IconFilterSearch } from '../../assets/images/icons/icon_filter_search.svg';
import { ReactComponent as IconFilterSelect } from '../../assets/images/icons/icon_filter_select.svg';
import { ReactComponent as IconSearch } from '../../assets/images/icons/icon_search.svg';
import { ReactComponent as IconSearchCard } from '../../assets/images/icons/icon_search_card.svg';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { LocaleBr } from '../../locale';
import { Colors } from '../../styles/themes';

import {
  consultationDataContracts,
  consultationDataNotes,
  mockSelectFilter,
} from './mock';
import {
  BoxConsultation,
  Button,
  ButtonIcon,
  CardsConsultation,
  CardsConsultationArea,
  Container,
  Toolbar,
  Wrapper,
} from './styles';

/* eslint-disable-next-line */
export interface NotesConsultationProps {
  children?: React.ReactNode;
}
interface CardProps {
  id: number;
  desc: string;
}

const styles = {
  filter: {
    fontSize: '20px',
    fontFamily: 'Inter-Light',
    backgroundColor: Colors.neutral[100],
    height: '51px',
    width: '418px',
    marginRight: '20px',
    color: Colors.brand.default,
    '&::placeholder': {
      fontFamily: 'Inter-Light',
      fontSize: '20px',
      color: Colors.font.default,
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  selectContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  selectMenu: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: '20px',
  },
  placeholder: {
    fontFamily: 'Inter-Light',
    fontSize: '20px',
    color: Colors.font.default,
  },
  iconSearch: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
    position: 'absolute',
    right: 26,
  },
  iconCardsContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: Colors.neutral[100],
  },
};

export function NotesConsultation(props: NotesConsultationProps) {
  const { consultation, throwAttest } = LocaleBr;
  const [consultationData, setConsultationData] = useState<CardProps[]>([]);
  const [consultationDataFilter, setConsultationDataFilter] = useState<
    CardProps[]
  >([]);
  const [searchFilterIcon, setSearchFilterIcon] = useState<string>('search');
  const [searchValue, setSearchValue] = useState<string>('Pesquisa');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setConsultationData(consultationDataNotes);
    setConsultationDataFilter(consultationDataNotes);
  }, []);

  const handleClickNotes = () => {
    setConsultationData(consultationDataNotes);
    setConsultationDataFilter(consultationDataNotes);
  };

  const handleClickContracts = () => {
    setConsultationData(consultationDataContracts);
    setConsultationDataFilter(consultationDataContracts);
  };

  const handleClickFilterSearch = () => {
    if (searchFilterIcon === 'filters') {
      setSearchFilterIcon('search');
    } else {
      setSearchFilterIcon('filters');
    }
  };

  const onChangeAutoComplete = (textValue: string) => {
    setSearchValue(textValue);
    const consultationDataFilter = consultationData
      .filter((item) => item.desc.includes(textValue))
      .map((item) => {
        return item;
      });

    setConsultationDataFilter(consultationDataFilter);
  };

  const Placeholder: React.FC<NotesConsultationProps> = ({ children }) => {
    return <div style={styles.placeholder}>{children}</div>;
  };

  const renderSelectFilter: () => JSX.Element[] = () => {
    return mockSelectFilter.map((dt, i) => {
      return (
        <MenuItem style={styles.selectMenu} key={i} value={dt.value}>
          {dt.label}
        </MenuItem>
      );
    });
  };

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header title={throwAttest.menu} />
        <BoxConsultation>
          <Toolbar>
            <Box>
              <Box sx={styles.buttonContainer}>
                <Button onClick={() => handleClickNotes()}>
                  {consultation.buttonNotes}
                </Button>
                <Button onClick={() => handleClickContracts()}>
                  {consultation.buttonNotes}
                </Button>
                <ButtonIcon onClick={() => handleClickFilterSearch()}>
                  {searchFilterIcon === 'search' ? (
                    <IconSearch width={40} style={styles.icon} />
                  ) : (
                    <IconFilterSearch width={40} style={styles.icon} />
                  )}
                </ButtonIcon>
              </Box>
            </Box>
            <Box sx={styles.selectContainer}>
              {searchFilterIcon === 'search' && (
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
                            {consultation.selectPlaceholder}
                          </Placeholder>
                        )
                  }
                >
                  {renderSelectFilter()}
                </Select>
              )}

              {searchFilterIcon === 'filters' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    placeholder="Pesquisa"
                    value={searchValue}
                    onChange={(event) =>
                      onChangeAutoComplete(event.target.value)
                    }
                    InputLabelProps={{
                      shrink: false,
                    }}
                    InputProps={{ style: styles.filter }} // font size of input text
                  />
                  <Box sx={styles.iconSearch}>
                    <IconSearchCard width={57} />
                  </Box>
                </div>
              )}
            </Box>
          </Toolbar>
          <CardsConsultationArea>
            <>
              {consultationDataFilter.map((item, index) => (
                <CardsConsultation>
                  {item.desc}
                  <div style={styles.iconCardsContainer}>
                    <IconSearchCard width={60} />
                  </div>
                </CardsConsultation>
              ))}
            </>
          </CardsConsultationArea>
        </BoxConsultation>
      </Container>
    </Wrapper>
  );
}

export default NotesConsultation;
