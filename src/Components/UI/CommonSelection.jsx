import React from 'react'
import { Container } from 'reactstrap';
import "../../Styles/common_section.css";

const CommonSelection = ({title}) => {
  return <section className="common__section">
    <Container className='text-center'>
        <h1>{title}</h1>
    </Container>
  </section>
}

export default CommonSelection