
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OpenFinancePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [docType, setDocType] = useState('CPF');
  const [docValue, setDocValue] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleConnect = (e) => {
    e.preventDefault();
    if (!isAuthorized) {
      toast({
        variant: "destructive",
        title: "Autorização Necessária",
        description: "Você precisa autorizar o acesso aos seus dados.",
      });
      return;
    }
    if (!docValue) {
      toast({
        variant: "destructive",
        title: "Campo Obrigatório",
        description: `Por favor, informe seu ${docType}.`,
      });
      return;
    }
    toast({
      title: "Conectando ao Open Finance...",
      description: "Estamos buscando seus dados de investimento.",
    });
    setTimeout(() => navigate('/dashboard'), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-12"
    >
      <Card className="w-full max-w-lg shadow-2xl animate-slide-in-up">
        <CardHeader className="space-y-2 text-center">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-2" />
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text">Conecte-se ao Open Finance</CardTitle>
          </motion.div>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <CardDescription className="text-muted-foreground">Compartilhe seus dados de investimento de forma segura.</CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.form onSubmit={handleConnect} className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant={docType === 'CPF' ? 'secondary' : 'outline'}
                onClick={() => setDocType('CPF')}
                className="rounded-lg"
              >
                CPF
              </Button>
              <Button
                type="button"
                variant={docType === 'CNPJ' ? 'secondary' : 'outline'}
                onClick={() => setDocType('CNPJ')}
                className="rounded-lg"
              >
                CNPJ
              </Button>
            </div>
            <div>
              <Label htmlFor="document">{docType}</Label>
              <Input 
                id="document" 
                type="text" 
                placeholder={`Digite seu ${docType}`} 
                value={docValue}
                onChange={(e) => setDocValue(e.target.value)}
                required 
                className="rounded-lg mt-1"
              />
            </div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3 p-4 border border-teal-dark/50 rounded-lg bg-card/50"
            >
              <div className="flex items-start space-x-2">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Ao continuar, você autoriza o UniVest a acessar seus dados de investimentos (aplicações, rendimentos, histórico de perdas e ganhos) em todas as instituições financeiras conectadas ao Open Finance. 
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Seus dados serão armazenados de forma segura em nosso aplicativo, em conformidade com a Lei Geral de Proteção de Dados (LGPD). Você pode revogar este acesso a qualquer momento nas configurações.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center space-x-2 pt-2"
            >
              <Checkbox 
                id="terms" 
                checked={isAuthorized}
                onCheckedChange={setIsAuthorized}
                className="rounded border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Li e concordo com a autorização de acesso aos dados.
              </Label>
            </motion.div>
          </motion.form>
        </CardContent>
        <CardFooter>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="w-full">
            <Button onClick={handleConnect} className="w-full rounded-lg bg-gradient-to-r from-teal-dark to-teal-deep hover:from-teal-deep hover:to-teal-dark transition-all duration-300 transform hover:scale-105">
              Conectar e Autorizar
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default OpenFinancePage;
  