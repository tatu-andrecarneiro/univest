import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = ({ logoUrl }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] relative overflow-hidden p-8"
    >
      <motion.img
        src={logoUrl}
        alt="UniVest Logo Watermark"
        className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
      
      <motion.div 
        className="z-10 text-center bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl shadow-teal-dark/10"
        
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
      >
        <h1 className="text-3xl md:text-2xl font-extrabold mb-2">
          <span className="bg-gradient-to-r from-teal-light to-primary text-transparent bg-clip-text">
            Bem-vindo(a) ao UniVest!
          </span>
        </h1>
        <p className="text-lg md:text-10px text-muted-foreground mb-5 max-w-xl mx-auto">
          Sua jornada de investimentos inteligente começa aqui. Explore, acompanhe e decida com confiança.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="rounded-lg bg-gradient-to-r from-teal-dark to-teal-deep hover:from-teal-deep hover:to-teal-dark text-lg px-8 py-6 shadow-lg hover:shadow-xl shadow-teal-dark/30"
            >
              Meu Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/open-finance')}
              className="rounded-lg border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-8 py-6"
            >
              Conectar Open Finance
            </Button>
          </motion.div>
        </div>
      </motion.div>
       <motion.div
        className="absolute bottom-8 text-center text-muted-foreground text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>Pronto para decolar seus investimentos? 🚀</p>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;