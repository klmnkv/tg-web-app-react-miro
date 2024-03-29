import React from 'react';
import Button from "../button/button";
import {userTelegram} from "../../hooks/userTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = userTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;