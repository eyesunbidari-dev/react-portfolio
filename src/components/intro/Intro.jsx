import "./intro.css"
import Me from "../../img/eyec.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">سلام، من</h2>
                    <h1 className="i-name"> آیسان بیدارسفیدی هستم</h1>
                    <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item"> طراح و توسعه دهنده ی وب</div>
                          <div className="i-title-item"> Front-end Developer</div>
                     </div>
                    </div>
                    <p className="i-desc">
                    
                    از وقتی یادمه ،  همیشه عاشق هنر و تکنولوژی بودم . در نتیجه تصمیم گرفتم طراح و برنامه نویس خوبی باشم . حدودا دو سال و نیم پیش بدون هیچ پیش زمینه ی قبلی وارد دنیای برنامه نویسی شدم و میدونم هنوز کلی راه دارم برای شناخت این دنیای عجیب و هیجان انگیز.
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro
