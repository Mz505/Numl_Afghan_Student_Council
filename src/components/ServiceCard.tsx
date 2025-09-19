import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, ExternalLink, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link?: string;
  isExternal?: boolean;
  badge?: string;
  whatsappMessage?: string;
  timing?: string;
  contact?: string;
  services?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  link,
  isExternal = false,
  badge,
  whatsappMessage,
  timing,
  contact,
  services = []
}) => {
  const CardContent = () => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        {badge && (
          <span className={`px-2 py-1 text-xs rounded-full ${
            badge === 'Extended' ? 'bg-orange-500/20 text-orange-400' :
            badge === 'Important' ? 'bg-red-500/20 text-red-400' :
            badge === 'Updated' ? 'bg-blue-500/20 text-blue-400' :
            badge === 'WhatsApp' ? 'bg-green-500/20 text-green-400' :
            badge === 'Free Service' ? 'bg-purple-500/20 text-purple-400' :
            badge === 'On Campus' ? 'bg-cyan-500/20 text-cyan-400' :
            'bg-green-500/20 text-green-400'
          }`}>
            {badge}
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {timing && (
        <div className="mb-3">
          <p className="text-blue-400 text-sm font-medium">Timing: {timing}</p>
        </div>
      )}
      
      {contact && (
        <div className="mb-3">
          <p className="text-green-400 text-sm font-medium">Contact: {contact}</p>
        </div>
      )}
      
      {services.length > 0 && (
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-purple-500/20 rounded-lg p-2 text-center text-purple-300 text-xs"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between mt-auto">
        {whatsappMessage && (
          <WhatsAppButton
            message={whatsappMessage}
            className="flex-1 mr-2"
          >
            <span className="text-sm">Contact via WhatsApp</span>
          </WhatsAppButton>
        )}
        
        {link && (
          <div className="flex items-center">
            <ExternalLink className={`h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors ${!isExternal ? 'opacity-50' : ''}`} />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link && !whatsappMessage) {
    return (
      <a
        href={link}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ServiceCard;