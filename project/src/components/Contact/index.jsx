import React from "react";
import "./contact.scss";
import Button from "../Button";

function ContactSection() {
  return (
    <div className="contact">
      <div className="container">
        <div className="pageHead">
          <div className="head">Contact</div>
        </div>

        <div className="main">
          <div className="input-area">
            <form action="">
              <input type="text" placeholder="NAME, SURNAME" />
              <input type="email" placeholder="E-MAIL ADRESS" />
              <input type="text" placeholder="THEME" />
              <textarea type="text" placeholder="YOUR MESSAGE" />
              <Button children={"Shop Now"} />
            </form>
          </div>
          <div className="img">
            <img
              src="https://s3-alpha-sig.figma.com/img/1a81/6eed/44a385856238ca77ac82ce311e6ee73e?Expires=1693180800&Signature=ok8xdrDTYhbNJ1EtRzNQEH26mwl8otpMi3kmUgkWPiHpqQn8ooglXsSDzwl3hHoG1JNBf16MedlYhz02zfdjIs0KsAzXS8Rdx0VHkMbxdIe~Y8k2o55TfUj6o5g9zV5tp12v-lSZiiMyegnv2J5909UqT4IKATfb8Gvovax0yyiK~3FCBPDHr6o5CmrMnqg~ErocnCEsC3wtMkzAmZjjw2KoJgrMRL47VJUrB~ilrE1Tou~IxGTHi9POkcA-1ugNAvLMspn7yxJO8ULsD3eKDuv4U5wAz4mytX71oGqffdr9jUWHm7L2h~XQIayIr5Lu~3qjErqesVEpGnI2y0b3WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
