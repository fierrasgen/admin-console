import React from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper, Content, Input, InputWrapper, ButtonWrapper, Error } from "./styles";
import { Header } from "../../components/Header/Header";


export const Main = () => {
    const navigate = useNavigate();
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorLogged, setErrorLogged] = React.useState(false);

    const onClick = () => {
        if (login === 'admin' && password === 'admin') {
            navigate("/dashboard?id=CPU");
        } else {
            setErrorLogged(true);
        }
    }

        return (
            <Wrapper>
                <Header/>
                <Content>
                    <h3>Войдите в систему</h3>
                    <InputWrapper>
                        <Input
                            placeholder="Имя пользователя"
                            type="text"
                            value={login}
                            name="login"
                            onChange={e => setLogin(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            placeholder="Пароль"
                            type="password"
                            value={password}
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                        <button onClick={onClick}>Войти</button>
                    </ButtonWrapper>
                    {errorLogged ? <Error>Неправильный логин или пароль</Error> : false}
                </Content>
            </Wrapper>
        );
}

