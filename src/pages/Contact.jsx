import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bf9vrvd",
        "template_i933303",
        form.current,
        "-rBRte5_kjLnvxObb",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        },
      );
  };
  return (
    <div className="max-w-3xl py-10 mx-auto space-y-6">
      <h1 className="text-3xl font-bold md:text-4xl">Contact & Membership</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-6 space-y-4 rounded bg-gray-50"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 text-white rounded bg-primary hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
export default Contact;
