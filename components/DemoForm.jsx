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

  console.log('📤 Sending this data:', submittedData);

  try {
    const res = await fetch('https://omninex.app.n8n.cloud/webhook/3b65c89f-d4c7-499f-b9ea-804af9f9dfc5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(submittedData),
    });

    const result = await res.text(); // 👈 Дори и да не е JSON, ще го покажем

    console.log('✅ Webhook response:', result);

    if (!res.ok) throw new Error(`Webhook failed with status ${res.status}`);

    alert('✅ Your demo request has been received!');
    setForm({ name: '', email: '', company: '', interest: '', otherInterest: '' });

  } catch (err) {
    console.error('❌ Full error:', err);
    alert('❌ Submission failed. Check the console for error.');
  }
};
