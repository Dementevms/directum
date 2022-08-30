import { FC } from "react";

import $ from './styles.module.scss'

export const Banner: FC = () => {
    return (<div className={$.wrapper}>
    <div className={$.flex}>
        <img src="images/logo.png" alt="logo"/>
        <div className={$.title}>НАЗВАНИЕ МЕРОПРИЯТИЯ</div>
        <div className={$.subtitle}>4 МАЯ 2049</div>
        <div className={$.text}>в самом сердце страны</div>
    </div>
</div>)
}