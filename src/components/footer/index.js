import { Break, Column, Container, Link, Row, Text, Title } from './styles/footer'

import react from "react";

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps  }>{children}</Row>;
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps  }>{children}</Column>;
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps  }>{children}</Link>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps  }>{children}</Title>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps  }>{children}</Text>;
}

Footer.Break = function FooterBreak({ ...restProps }) {
    return <Break {...restProps} />;
};