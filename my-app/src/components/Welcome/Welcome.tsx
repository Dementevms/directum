import classNames from "classnames";
import { FC } from "react";

import $ from './styles.module.scss'

export const Welcome: FC = () => {
    return (
        <div className={$.wrapper}>
            <div className="container">
                <div className="row">
                    <div className={classNames('col-lg-6', $.text)}>
                        <p>Дорогие друзья!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu
                            fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id
                            est
                            laborum.</p>
                    </div>
                    <div className={classNames('col-lg-6', $.form)}>
                        <div className={$.title}>Регистрация</div>
                        <div className={$.subtitle}>Пожалуйста, проверьте правильность введенных данных:</div>
                        <div className={$.field}>
                            <div>ФИО:</div>
                            <div>Иванов Иван Иванович</div>
                        </div>
                        <div className={$.field}>
                            <div>Место работы:</div>
                            <div>DIRECTUM</div>
                        </div>
                        <div className={$.field}>
                            <div>E-mail:</div>
                            <div>ivanov_ii@directum.ru</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}