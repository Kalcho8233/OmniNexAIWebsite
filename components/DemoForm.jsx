const handleSubmit = async (e) => {
  e.preventDefault();
  const finalInterest =
    form.interest === 'Other' && form.otherInterest.trim() !== ''
      ? form.otherInterest
      : form.interest;

  const submittedData = {
    name: form.name,
    email: form.email,
    company: form.company,
    interest: finalInterest || 'Not specified',
  };

  try {
    console.log('👉 Sending data to webhook:', submittedData);

    const res = await fetch('https://omninex.app.n8n.cloud/webhook/omninexai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedData),
    });

    if (!res.ok) throw new Error(`Webhook error: ${res.status}`);

    alert('✅ Your demo request has been received!');
    console.log('✅ Submitted to n8n:', submittedData);

    setForm({ name: '', email: '', company: '', interest: '', otherInterest: '' });

  } catch (err) {
    console.error('❌ Failed to submit to n8n:', err);
    alert('Something went wrong. Please try again later.');
  }
};
