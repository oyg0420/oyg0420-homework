import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  padding: 10px;
  border-top: 1px solid gray;
`

const Footer: React.FC = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>
}

export default Footer
