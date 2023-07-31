import styled from "styled-components";

export const MenuSection = styled.div`
    position: 'fixed',
    left: 0,
    height: '50vh',
    width: '15vw',  // Example: 50% of the viewport width
    backgroundColor: '#e7807c',
    paddingTop: '5vh',
    boxSizing: 'border-box',
    marginTop: '10vh',
    marginBottom: '50vh',
    fontSize: '1.7em',
    borderRight: 2px solid rgb(255, 130, 92),

    &::after {
      content: '';
      position: absolute;
      top: 0;
      margin-left: 18vw;
      width: 3px;
      height: 100%;
      background-color: rgb(255, 130, 92); // Change the color as desired
    }
    '& h1': {
        margin: 'auto',
      },
    '& ul': {
        listStyleType: 'none', // Set listStyleType to none for ul
      },
    '& li': {
        marginTop:'5vh',
    },


    @media (min-width: 250px) and (max-width: 600px) {
      marginLeft: 15vw,
      borderRight: 2px solid rgb(255, 130, 92),
    }
`;

export const MenuItem = styled.li`
  list-style-type: none;
  border: 0px solid black;
  border-radius: 8px;
  transition: background-color 0.3s;
  margin: 2vw;
  width: 10vw;
  text-align: center;

  &:hover {
    background-color: rgb(255, 130, 92);
  }

  @media (min-width: 250px) and (max-width: 600px) {
      width: 10vw;
      font-size: 1.2em;
  }
`;

export const H4 = styled.h3`
  font-size: 1.9em;
  margin-top: 3vh;
`;

export const MenuLogo = styled.h5`
  font-size: 2.3em;

  @media (min-width: 250px) and (max-width: 600px) {
    font-size: 1.4em;
  }
`;

export const HIDE = styled.h5`
  font-size: 1.5em;
  margin-top:-2vh;

  @media (min-width: 250px) and (max-width: 600px) {
    display: none;
  }
`;