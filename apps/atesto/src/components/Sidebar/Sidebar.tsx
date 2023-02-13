import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box, CardMedia, Typography } from '@mui/material';

import images from '../../assets/images';
import { Colors, Size } from '../../styles/themes';

import { SidebarData } from './SidebarData';

const SidebarMenu = styled.div`
  width: ${Size.sidebar.width.default};
  height: ${Size.sidebar.height[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.brand.default};
  position: fixed;
  top: 0;
  left: '0';
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.neutral[100]};
  width: 251px;
  height: 60px;
  border-radius: ${Size.radius};
  margin-bottom: ${Size.default[20]};
  &:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    background-color: ${Colors.hover.default};
  }
  &:active {
    background: ${Colors.active.default};
    color: ${Colors.neutral[900]};
  }
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  text-align: center;
  padding: 1rem;
  font-size: 20px;
  text-decoration: none;
  color: ${Colors.neutral[100]};
  &:active {
    color: ${Colors.neutral[700]};
  }
`;

const ContainerLogoHeader = styled.div`
  display: flex;
  flex-direction: 'column';
  align-items: center;
  justify-content: center;
  padding-top: '14px';
  margin-top: 15%;
  margin-bottom: 20%;
`;

const ContainerLogoFooter = styled.div`
  display: flex;
  flex-direction: 'column';
  align-items: right;
  justify-content: center;
  padding-bottom: 20;
`;

const styles = {
  logoHeader: {
    height: '65px',
    width: '200px',
  },
  logoFooter: {
    height: '85px',
    width: '200px',
  },
  box: {
    divider: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'space-between',
      height: '100%',
      padding: '5%',
      borderRight: `5px solid ${Colors.border.default}`,
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  typography: {
    title: {
      marginLeft: '16px',
      fontFamily: 'Roboto-Regular',
      fontSize: `${Size.fonts.title}`,
    },
  },
};

const Sidebar: React.FunctionComponent = () => {
  const { logos } = images;
  const LogoSeed = logos.LogoSeed;
  const LogoGovPr = logos.LogoGovPr;
  return (
    <SidebarMenu>
      <Box sx={styles.box.divider}>
        <ContainerLogoHeader>
          <CardMedia sx={styles.logoHeader} component="img" image={LogoSeed} />
        </ContainerLogoHeader>

        <Box sx={styles.box.menu}>
          {SidebarData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks to={item.path}>
                  <Typography sx={styles.typography.title}>
                    {item.title}
                  </Typography>
                </MenuItemLinks>
              </MenuItems>
            );
          })}
        </Box>

        <ContainerLogoFooter>
          <CardMedia sx={styles.logoFooter} component="img" image={LogoGovPr} />
        </ContainerLogoFooter>
      </Box>
    </SidebarMenu>
  );
};

export default Sidebar;
