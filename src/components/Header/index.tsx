import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/Logo-Ignite.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img
          src={logoIgnite}
          alt="Logo com dois triângulos um maior e outro menor, 
          ambos com a mesma cor, porém o menor fica com uma parte 
          dele por baixo do maior assim fazendo com que essa parte 
          fique com uma cor mais clara"
        />

        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="History">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
