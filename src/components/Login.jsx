import Button from "./Button";

const Login = () => {
    return (
        <div className="main-login">
            <div className="center">
                <h2>Login</h2>
                <form className="formulario">
                    <label>Email</label>
                    <input type="text" id="email" />

                    <label>Senha</label>
                    <input type="password" id="senha" />

                    <Button />
                </form>
                <div className="new">
                    <h4>Ainda não tem conta?</h4>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Login;