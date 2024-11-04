import React from 'react';
import './style.css'; // Подключаем стили

const App = () => {
    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <title>English app</title>
            </head>
            <div className="top_panel">
                <button><a href="#">home</a></button>
                <button><a href="#registration">registration</a></button>
                <button><a href="#contact">contact</a></button>
            </div>

            <div className="main">
                <div className="panels">
                    <div className="panel" id="test">
                        <a className="title">Test</a>
                        <button>Start</button>
                        <button>info</button>
                    </div>

                    <div className="panel" id="train">
                        <a className="title">train</a>
                        <button>Start</button>
                        <button>info</button>
                    </div>

                    <div className="panel" id="idk">
                        <a className="title">idk</a>
                        <button>Start</button>
                        <button>info</button>
                    </div>
                </div>

                <div className="name">
                    <h1>Test your knowledge of English</h1>
                    <h2>Ресурс для изучения английского языка с подбором заданий на основе уровня знаний языка</h2>
                </div>

                <br />

                <img className="books" src="self-study.png" alt="english books" width="600px" height="400px" />
            </div>

            <ul className="contact" id="contact">
                Наши контакты
                <br />
                <button><a href="https://vk.com/axeval">VK</a></button>
                <button><a href="https://t.me/axeval">Telegram</a></button>
                <button><a href="mailto:4xev41ve@gmail.com">Gmail</a></button>
            </ul>
        </div>
    );
};

export default App;