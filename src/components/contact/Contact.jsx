import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef , useState} from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef = useRef();
    const [done , setDone] = useState(false)
    const handleSubmit  = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_8967gof', 'template_815vdqf', formRef.current, 'user_oLmvtgiyKs1C7ryHqumqx')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
              <div className="c-right">
                  <h1 className="c-title"> پروژه خود را توضیح دهید</h1>
                  <div className="c-info">
                      <div className="c-info-item">
                         <img
                           src={Phone}
                           alt=""
                           className="c-icon"
                         />
                         09102426129
                      </div>
                      <div className="c-info-item">
                         <img
                           src={Email}
                           alt=""
                           className="c-icon"
                         />
                         aysanbidariiii@gmail.com
                      </div>
                      <div className="c-info-item">
                         <img
                           src={Address}
                           alt=""
                           className="c-icon"
                         />
                         تهران
                      </div>
                  </div>
              </div>
              <div className="c-left">
              <p className="c-desc">
            <b>  با من در ارتباط باش :</b> 
            خواسته ی خودتو به من بگو
            
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="نام شما" name="user_name" />
            <input  type="text" placeholder="عنوان پیام" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="پیام شما" name="message" />
            <button>ارسال</button>
            {done && "ممنونم که بهم پیام دادی"}
          </form>
              </div>
            </div>
        </div>
    )
}

export default Contact
