'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';

// Shared enquiry form. Submissions are saved to Google Sheets by /api/enquiry.
export default function EnquiryForm({ title, className = '', rows = 4, source }) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Sorry, we could not send your enquiry right now.');
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  // Once someone starts editing again, clear the previous result.
  const handleInput = () => {
    if (status === 'sent' || status === 'error') setStatus('idle');
  };

  const sending = status === 'sending';

  return (
    <form className={`enquiry-form ${className}`.trim()} onSubmit={handleSubmit} onInput={handleInput}>
      <div className="form-top"><span>{title}</span><small>We typically respond within one business day.</small></div>
      <div className="form-row">
        <label>Full name<input required type="text" name="name" autoComplete="name" maxLength={100} placeholder="Your name" /></label>
        <label>Phone number<input required type="tel" name="phone" autoComplete="tel" maxLength={30} placeholder="+91 00000 00000" /></label>
      </div>
      <div className="form-row">
        <label>Email address<input required type="email" name="email" autoComplete="email" maxLength={150} placeholder="you@example.com" /></label>
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
      <label>Tell us about your project<textarea required name="message" rows={rows} maxLength={3000} placeholder="A few details about your project, location, and timeline..." /></label>
      <div className="form-honeypot" aria-hidden="true">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button className="button button--gold button--full" type="submit" disabled={sending}>
        {sending && <>Sending… <LoaderCircle className="form-spinner" size={17} /></>}
        {status === 'sent' && <>Enquiry received <Check size={17} /></>}
        {!sending && status !== 'sent' && <>Send enquiry <ArrowUpRight size={17} /></>}
      </button>
      {status === 'sent' && <p className="form-success" role="status">Thank you. Our team will be in touch shortly.</p>}
      {status === 'error' && <p className="form-error" role="alert">{error} Please try again, or call us on <a href="tel:+914424825565">044-24825565</a>.</p>}
    </form>
  );
}
