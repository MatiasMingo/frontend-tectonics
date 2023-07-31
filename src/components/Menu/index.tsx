import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { MenuSection, MenuItem, H4, HIDE, MenuLogo } from './styles';
import { useHistory } from 'react-router-dom';
import { MenuProps } from './types';
import Container from '../../common/Container';
import { BsPersonFill } from 'react-icons/bs';
import {FaWpforms, FaHome} from 'react-icons/fa';


const Menu = ({ t }: MenuProps) => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll position threshold as needed
      if (scrollPosition > 200) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <MenuSection className={scrollDown ? 'scroll-down' : ''} style={{ marginLeft: '-15vw' }}>
          <ul>
            <MenuItem>
              <div>
              <MenuLogo><FaHome/></MenuLogo>
              </div>
              <div>
              <HIDE>Home</HIDE>
              </div>
            </MenuItem>
            <MenuItem>
              <div>
              <MenuLogo><BsPersonFill/></MenuLogo>
              </div>
              <div>
              <HIDE>Clients</HIDE>
              </div>
            </MenuItem>
            <MenuItem>
              <div>
              <MenuLogo><FaWpforms/></MenuLogo>
              </div>
              <div>
              <HIDE>Forms</HIDE>
              </div>
            </MenuItem>
          </ul>
        </MenuSection>
      </div>
    </Container>
  );
};

export default withTranslation()(Menu);
