import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="cadastro"> Click para ir para Cadastro de Cliente</Link><br/>
            <Link to="simulacao">Click para ir para Simulção</Link><br/>
            <Link to="sobre">Click para ler sobre nós</Link><br/>
            <Link to="contacorrente">Click para ir para Conta</Link>
        </div>
    )
}

export default Home;