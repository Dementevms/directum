import { FC } from "react";

import $ from './styles.module.scss'

export const Banner: FC = () => {
    return (<div className={$.wrapper}>
        <ul className={$.nav}>
        <li>О мероприятии</li>
        <li>Регистрация</li>
        <li>Стоимость участия</li>
        <li>Спикеры</li>
    </ul>
    <div className={$.flex}>
        <img src="images/logo.png" alt="logo"/>
        <div className={$.title}>НАЗВАНИЕ МЕРОПРИЯТИЯ</div>
        <div className={$.subtitle}>4 МАЯ 2049</div>
        <div className={$.text}>в самом сердце страны</div>
        <div className={$.btn}>Регистрация</div>
    </div>
</div>)
}