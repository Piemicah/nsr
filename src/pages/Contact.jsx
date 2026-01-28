import { useRef } from "react";
import emailjs from "emailjs-com";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.svg";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z0qpwhk",
        "template_6tuaica",
        form.current,
        "YuwkfCAl-SJUSeyVC",
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

      <div className="bg-gray-50 p-6 rounded space-y-3">
        <h2 className="text-xl font-semibold">Follow Us</h2>
        <p className="text-gray-700">
          Stay connected with NSR for announcements, events, and neuroscience
          updates.
        </p>

        <div className="flex gap-4 flex-wrap">
          {/* X (Twitter) */}
          <a
            href="https://x.com/nsr_rwanda"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            <img src={twitter} alt="twitter" className="size-[20px]" />
            (Twitter)
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nsr_rwanda"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            <img src={instagram} alt="instagram" className="size-[20px]" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
