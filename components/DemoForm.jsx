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
    interest: finalInterest,
  };

  try {
    const res = await fetch('https://omninex.app.n8n.cloud/webhook/3b65c89f-d4c7-499f-b9ea-804af9f9dfc5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedData),
    });

    if (!res.ok) throw new Error(`Webhook error: ${res.status}`);

    alert('✅ Your demo request has been received!');
    console.log('✅ Submitted to n8n:', submittedData);

    // Clear form
    setForm({ name: '', email: '', company: '', interest: '', otherInterest: '' });

  } catch (err) {
    console.error('❌ Failed to submit to n8n:', err);
    alert('Something went wrong. Please try again later.');
  }
};
