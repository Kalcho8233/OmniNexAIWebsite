'use client';
import { useEffect, useRef } from 'react';

export default function StripeBuyButton({ buyButtonId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadStripeScript = async () => {
      if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = renderButton;
      } else {
        renderButton();
      }
    };

    const renderButton = () => {
      if (!window.StripeBuyButton || !containerRef.current) return;

      const button = document.createElement('stripe-buy-button');
      button.setAttribute('buy-button-id', buyButtonId);
      button.setAttribute('publishable-key', 'pk_test_51RmCp0Q3alExjY2yRHGEEF9MqAW4jaeWyRSq3MHmqNSrIAr1UJdHlo49JrHq4BaEtQId4fHWL2JvjA96FHtSNEUW00iBRfTM39');
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(button);
    };

    loadStripeScript();
  }, [buyButtonId]);

  return <div ref={containerRef} className="flex justify-center mt-4"></div>;
}
