'use client';
import { useEffect, useRef, useState } from 'react';

export default function StripeBuyButton({ buyButtonId }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Зареждаме Stripe скрипта само ако още не е наличен
    const loadStripe = async () => {
      if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        script.onload = () => setReady(true);
        document.body.appendChild(script);
      } else {
        // ако вече е зареден, чакаме малко и го маркираме като готов
        setTimeout(() => setReady(true), 300);
      }
    };

    loadStripe();
  }, []);

  return (
    <div className="mt-4 flex justify-center" ref={containerRef}>
      {ready && (
        <stripe-buy-button
          buy-button-id={buyButtonId}
          publishable-key="pk_test_51RmCp0Q3alExjY2yRHGEEF9MqAW4jaeWyRSq3MHmqNSrIAr1UJdHlo49JrHq4BaEtQId4fHWL2JvjA96FHtSNEUW00iBRfTM39"
        ></stripe-buy-button>
      )}
    </div>
  );
}
