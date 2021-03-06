import { Body, Container, Header, Inner, Item, Title } from './styles/accordion'
import  { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
          <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow} = useContext(ToggleContext);

    return <Body toggleShow={toggleShow} {...restProps}><p style={{
      padding: '0.8em 2.2em 0.8em 1.2em'
    }}>{children}</p></Body>;
}
