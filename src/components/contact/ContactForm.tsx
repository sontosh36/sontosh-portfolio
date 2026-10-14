"use client";

import { FormEvent, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiLoader, FiSend } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send your message.");
      }

      setFormData(initialForm);
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-100 dark:placeholder:text-gray-500 dark:hover:border-gray-600 dark:focus:border-primary dark:focus:bg-gray-800 dark:focus:ring-primary/20";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-5 shadow-sm sm:p-8 lg:p-9 dark:border-gray-800 dark:bg-gray-900/60">
      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative">
        <div className="mb-7">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            GET IN TOUCH
          </span>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Send me a message
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Have a project idea, a question, or an opportunity? Fill out the
            form below and let&apos;s connect.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                maxLength={100}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                maxLength={254}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClasses}>
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
              maxLength={150}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Your message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Tell me a little about your idea..."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} min-h-36 resize-none`}
              maxLength={5000}
              required
              disabled={isSubmitting}
            />
            <p className="mt-2 text-right text-xs text-gray-500 dark:text-gray-400">
              {formData.message.length}/5000 characters
            </p>
          </div>

          {status && (
            <div
              role={status.type === "error" ? "alert" : "status"}
              aria-live="polite"
              className={`flex items-start gap-2 rounded-xl border p-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
              }`}
            >
              {status.type === "success" ? (
                <FiCheckCircle className="mt-0.5 shrink-0" size={18} />
              ) : (
                <FiAlertCircle className="mt-0.5 shrink-0" size={18} />
              )}
              <p>{status.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 dark:focus-visible:ring-offset-gray-900"
          >
            {isSubmitting ? (
              <>
                <FiLoader className="animate-spin" size={18} />
                Sending message...
              </>
            ) : (
              <>
                Send Message
                <FiSend
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            Your information will only be used to respond to your message.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
