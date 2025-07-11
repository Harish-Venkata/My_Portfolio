import clsx from "clsx";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });

  // useEffect(() => {
  //   if (!formMessage.text) return;

  //   const timer = setTimeout(() => {
  //     setFormMessage({ text: "", type: "" });
  //   }, 2000); // 2000 ms = 2 seconds

  //   return () => clearTimeout(timer);
  // }, [formMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: "", type: "" });

    const formData = new FormData(e.target);
    formData.append("access_key", "519f7ba3-2406-41ab-8baf-3417e2ed6f63");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormMessage({ text: "Message sent successfully!", type: "success" });
      e.target.reset();
    } else {
      setFormMessage({
        text: data.message || "Something went wrong. Please try again.",
        type: "error",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="text-center mb-2 md:mt-10">
          <p className="text-white text-sm md:text-base inline-flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email:{" "}
            <a
              href="mailto:harishvenkata65@gmail.com"
              className="text-primary underline hover:text-primary/80"
            >
              harishvenkata65@gmail.com
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:ml-60 md:w-full md:mt-5">
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="519f7ba3-2406-41ab-8baf-3417e2ed6f63"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john123@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={clsx(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {formMessage.text && (
                <p
                  className={clsx(
                    "text-sm mt-2",
                    formMessage.type === "success"
                      ? "text-green-700"
                      : "text-red-500"
                  )}
                >
                  {formMessage.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
