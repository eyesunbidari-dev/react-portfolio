import "./about.css"

import Programm from "../../img/programmer.png"
import Skill from "../../img/skill.png"


const About = () => {
    return (
        <div className="a">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img
                src={Programm}
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">درباره من</h1>
            <p className="a-sub">
            برنامه نویس و توسعه دهنده ی front-end . با بیش از دو سال سابقه کار و فعالیت در حوضه ی استارت آپ و شرکت های ایرانی به همراه چند پروژه شخصی.
            </p>
            <p className="a-desc">
            حدودا دو سال و نیم پیش بر اساس علاقه ی شخصی و کنجکاویم وارد شاخه ی برنامه نویسی شدم و بعد از گذروندن دوره های html و css علاقم به شاخه ی front-end بیشتر شد و شروع کردم به مطالعه و آموزش Javascript و بعد React js و سطح دانش و تجربم رو در زمینه های طراحی و دیزاین و برنامه نویسی بالا بردم و همچنان مسیر رشد و توسعه برام ادامه داره تا بیشتر و بهتر با این دنیای جذاب آشنا بشم.
            </p>
            <div className="a-skill">
              <img src={Skill} alt="" className="a-skill-img" />
              <div className="a-skill-texts">
                <h4 className="a-skill-title">مهارت های من</h4>
                <p className="a-skill-desc">
                  HTML|CSS|JS|ECMAscript|React.js|Context API|React router|Redux|Redux thunk
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About
