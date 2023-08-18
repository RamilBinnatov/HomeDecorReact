import React from "react";
import "./aboutSection.scss";
import IconButton from "../IconButton";

function AboutSection() {
  return (
    <div className="about">
      <div className="container">
        <div className="head">ABOUT US</div>
        <div className="content">
          <div className="img">
            <img
              src="https://s3-alpha-sig.figma.com/img/754e/f220/6125e68f344e6b26d5b0e7816a0e4381?Expires=1693180800&Signature=Wq6DzI~SPL6M9S9JaGUKm4x~UnLGsNOTwQJ7yAH6OUv0auOCxCduipcqIwVloa4Ob28Q8QEF1zy1Z6rP5KGby2Phud2wk~mspx7zVmXCtfxpDNAm1ipxLelI11PSVz4t4xZAMBbxoT5IPT61KncuiTPGAfkVgG8sz8CsvSKXuvsFlxIlcohg9a9j~8YLM7glWYVG02FXebm54aY4cmQk2TaJ5MZ4eXtfSRUOpP7o-qiwlAyVkByaOfevKnBE3mdGxQs7MftUl7hh0BdzHCfgXWd6KPx8hf4FeeBwVsNq3ZttCuIhvYV-ujlgv0KvCe5R0FO19c17sMv8o6fJoRVufQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div className="text">
            <div className="title">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus. Temporibus autem
              quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat. Itaque earum rerum hic
              tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat.
            </div>
            <IconButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
