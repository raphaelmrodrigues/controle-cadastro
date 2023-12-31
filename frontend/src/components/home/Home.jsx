import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início" subtitle="Projeto de React.">
        <div className="display-4">
            Bem Vindo!
        </div>
        <hr />
        <p className="mb-0">
            Sistema desenvolvido para controle de pausas no ambiente de trabalho.
        </p>
    </Main>