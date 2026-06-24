import React, { useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { contactService } from "../../services/contactService";
import type { ContactFormData } from "../../services/contactService";

const SUBJECTS = ["General Enquiry", "Room Reservation", "Event & Conference", "Dining Reservation", "Feedback & Complaints", "Other"];

const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    lines: ["Hotel Mahal, Marine Drive", "Mumbai, Maharashtra 400020", "India"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    lines: ["+91 22 1234 5678", "+91 22 1234 5679"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    lines: ["reservations@hotelmahal.com", "info@hotelmahal.com"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    lines: ["Front Desk: 24 / 7", "Reservations: 8:00 AM – 10:00 PM", "Restaurant: 7:00 AM – 11:00 PM"],
  },
];

const defaultForm: ContactFormData = { name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" };

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<ContactFormData> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await contactService.submitForm(form);
      setSubmitted(true);
      setForm(defaultForm);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof ContactFormData) =>
    `w-full px-3 py-2 text-sm rounded-lg border bg-white text-primary-text placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${
      errors[field] ? "border-red-400" : "border-border"
    }`;

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Get In Touch</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-primary-text">Contact Us</h1>
          <p className="mt-1.5 text-secondary-text text-sm max-w-xl">
            We'd love to hear from you. Reach out for reservations, events, or any enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">

          {/* Left — Form + Map */}
          <div className="space-y-8">

            {/* Form */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h2 className="text-base font-semibold text-primary-text mb-5">Send Us a Message</h2>

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-success flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-primary-text mb-1">Message Sent!</p>
                  <p className="text-xs text-secondary-text mb-4">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-primary-text mb-1">Full Name <span className="text-red-400">*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Arjun Mehta" className={inputClass("name")} />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-primary-text mb-1">Email <span className="text-red-400">*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="arjun@email.com" className={inputClass("email")} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-primary-text mb-1">Phone <span className="text-secondary-text font-normal">(optional)</span></label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass("phone")} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-primary-text mb-1">Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className={inputClass("subject")}>
                        {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-primary-text mb-1">Message <span className="text-red-400">*</span></label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?" className={`${inputClass("message")} resize-none`} />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Hotel Mahal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8!2d72.8234!3d18.9388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMarine+Drive%2C+Mumbai!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Info */}
          <div className="space-y-5">

            {/* Contact Info */}
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary-text mb-1">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-xs text-secondary-text">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-xs font-semibold text-red-700">Emergency Contact</p>
              </div>
              <p className="text-xs text-red-600 mb-1">24/7 Emergency Helpline</p>
              <p className="text-sm font-semibold text-red-700">+91 22 9999 0000</p>
              <p className="text-xs text-red-500 mt-2">For urgent assistance regarding safety, medical emergencies, or security.</p>
            </div>

           {/* Social */}
<div className="bg-white border border-border rounded-lg p-5">
  <p className="text-xs font-semibold text-primary-text mb-3">
    Follow Us
  </p>

  <div className="flex gap-3">
    {[
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
    ].map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-md border border-border text-xs text-secondary-text hover:text-primary hover:border-primary transition-colors"
      >
        {s.label}
      </a>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;