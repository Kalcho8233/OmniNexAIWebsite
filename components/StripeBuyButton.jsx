'use client';
import { useEffect, useRef } from 'react';

export default function StripeBuyButton({ buyButtonId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.StripeBuyButton) return;

    const button = document.createElement('stripe-buy-button');
    button.setAttribute('buy-button-id', buyButtonId);
    button.setAttribute('publishable-key', 'pk_test_51RmCp0Q3alExjY2yRHGEEF9MqAW4jaeWyRSq3MHmqNSrIAr1UJdHlo49JrHq4BaEtQId4fHWL2JvjA96FHtSNEUW00iBRfTM39');
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(button);
  }, [buyButtonId]);

  return <div ref={containerRef}></div>;
}
