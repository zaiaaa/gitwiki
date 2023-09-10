import React from 'react'
import { ContainerButton } from './style'


function Botao({onClick}) {
  return (
    <ContainerButton onClick={onClick}>
        Buscar
    </ContainerButton>
  )
}

export default Botao