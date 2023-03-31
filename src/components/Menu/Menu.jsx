import React from "react";
import { Link } from "react-router-dom";

import {MenuItem, Wrapper, Footer, Avatar, User} from "./styles";
import { Header} from "../Header/Header";
import { useNavigate } from 'react-router-dom';

export const Menu = ({active}) => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    }

    return (
        <Wrapper>
            <Header />
            <ul>
                <MenuItem isActive={active === 'CPU'}><Link to={"?id=CPU"}>Загрузка CPU</Link></MenuItem>
                <MenuItem isActive={active === 'RAM'}><Link to={"?id=RAM"}>RAM</Link></MenuItem>
                <MenuItem isActive={active === 'SQL'}><Link to={"?id=SQL"}>Ресурсы postgreSQL</Link></MenuItem>
                <MenuItem isActive={active === 'QUE'}><Link to={"?id=QUE"}>Очередь заданий</Link></MenuItem>
                <MenuItem isActive={active === 'HDD'}><Link to={"?id=HDD"}>Место на диске</Link></MenuItem>
            </ul>
            <Footer>
                <User>
                    <Avatar />
                    <p>admin</p>
                </User>
                <button onClick={onClick}>Выйти</button>
            </Footer>
        </Wrapper>
    )
}