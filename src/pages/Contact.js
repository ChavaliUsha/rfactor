import React from "react";

function Contact() {
  return (
    <div className="text-center">
      <h2>Contact Us</h2>
      <p className="mt-3">You can reach us at <strong>rfactor@gmail.com</strong></p>
      <form className="mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="3" placeholder="Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send</button>
      </form>
    </div>
  );
}

export default Contact;
