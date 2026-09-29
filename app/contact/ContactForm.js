'use client';

import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="enquiry-form contact-page-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <div className="form-top"><span>Send us an enquiry</span><small>We typically respond within one business day.</small></div>
      <div className="form-row">
        <label>Full name<input required type="text" name="name" autoComplete="name" placeholder="Your name" /></label>
        <label>Phone number<input required type="tel" name="phone" autoComplete="tel" placeholder="+91 00000 00000" /></label>
      </div>
      <div className="form-row">
        <label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label>Project type
          <select name="projectType" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Residential Construction</option>
            <option>Commercial Construction</option>
            <option>Renovation & Remodeling</option>
            <option>Project Management</option>
          </select>
        </label>
      </div>
      <label>Tell us about your project<textarea required name="message" rows="5" placeholder="A few details about your project, location, and timeline..." /></label>
      <button className="button button--gold button--full" type="submit">
        {submitted ? 'Enquiry received' : 'Send enquiry'} {submitted ? <Check size={17} /> : <ArrowUpRight size={17} />}
      </button>
      {submitted && <p className="form-success" role="status">Thank you. Our team will be in touch shortly.</p>}
    </form>
  );
}
