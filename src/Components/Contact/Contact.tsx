import "./ContactStyle.css";

import { FormEvent, useState } from "react";
import { msg_icon } from "../../assets";
import { Mail, Headphones, MapPin } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "407fa323-9988-4126-bb87-10e86b5f6ed8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact stiff-block con-stiff">
        <div className="contact-col">
          <h3>
            Send a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            members.
          </p>
          <ul>
            <li>
              <span>
                <Mail />
              </span>
              digitalsensationz@gmail.com
            </li>
            <li>
              <span>
                <Headphones />
              </span>
              +91 8800-348-485 [Ruchi Pahwa] <br />
              (Business Development Manager)
            </li>
            <li>
              <span>
                <MapPin />
              </span>
              B-305, 3rd Floor & A-201, 2nd Floor,
              <br /> North Ex Mall, Pocket 18,
              <br /> Sector-9, Rohini, New Delhi-110085
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="">YourName</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              required
            />

            <label htmlFor="">Phone number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your mobile number..."
              required
            />

            <label htmlFor="">Write your messege here</label>
            <textarea
              name="messege"
              rows={6}
              placeholder="Enter your messege..."
              required
            ></textarea>
            <div>
              <button type="submit" className="btn dark-btn">
                Submit now
              </button>
            </div>
          </form>

          <span>{result}</span>
        </div>
      </div>
    </>
  );
}
