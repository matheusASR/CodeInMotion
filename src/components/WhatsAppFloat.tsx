import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '5511999999999'; // Format: country code + number without + or spaces
    const message = 'Hi CodeInMotion! I visited your portfolio and would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;