import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Fingerprint, Phone, Mail, KeyRound, FileBadge } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CreateAccountPage = ({ logoUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const socialProvider = location.state?.socialProvider;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [useBiometrics, setUseBiometrics] = useState(false);

  const [isSocialLogin, setIsSocialLogin] = useState(false);

  useEffect(() => {
    if (socialProvider) {
      setIsSocialLogin(true);
      setEmail(socialProvider === 'Google' ? 'usuario.google@example.com' : 'usuario.microsoft@example.com');
      // Simulate fetching email from social provider
    }
  }, [socialProvider]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSocialLogin && password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Erro de Validação",
        description: "As senhas não coincidem.",
      });
      return;
    }
    if (!cpf || !phone) {
       toast({
        variant: "destructive",
        title: "Campos Obrigatórios",
        description: "CPF e Telefone são obrigatórios.",
      });
      return;
    }

    toast({
      title: "Criando sua conta...",
      description: socialProvider 
        ? `Finalizando cadastro com ${socialProvider}. Redirecionando...` 
        : "Sua conta está sendo criada. Redirecionando...",
    });
    setTimeout(() => navigate('/home'), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-br from-background to-teal-deep/20 px-4"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness:100 }}
        className="mb-8"
      >
        <img src={logoUrl} alt="UniVest Logo" className="h-24 w-24 rounded-2xl shadow-2xl shadow-teal-dark/30" />
      </motion.div>

      <Card className="w-full max-w-lg shadow-2xl rounded-xl">
        <CardHeader className="space-y-1 text-center">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text">
              {socialProvider ? `Finalize seu Cadastro com ${socialProvider}` : "Crie sua Conta UniVest"}
            </CardTitle>
          </motion.div>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <CardDescription className="text-muted-foreground">
              {socialProvider ? "Complete alguns dados para continuar." : "Preencha os campos abaixo para começar."}
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSocialLogin}
                  className="rounded-lg pl-10 bg-input/50 border-teal-dark/50 focus:border-teal-light disabled:opacity-70 disabled:cursor-not-allowed" 
                />
              </div>
            </motion.div>

            {!isSocialLogin && (
              <>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="Crie uma senha forte" required 
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      className="rounded-lg pl-10 bg-input/50 border-teal-dark/50 focus:border-teal-light" />
                  </div>
                </motion.div>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="confirmPassword" type="password" placeholder="Confirme sua senha" required 
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                      className="rounded-lg pl-10 bg-input/50 border-teal-dark/50 focus:border-teal-light" />
                  </div>
                </motion.div>
              </>
            )}
            
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <Label htmlFor="phone">Telefone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="phone" type="tel" placeholder="(XX) XXXXX-XXXX" required 
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="rounded-lg pl-10 bg-input/50 border-teal-dark/50 focus:border-teal-light" />
              </div>
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
              <Label htmlFor="cpf">CPF</Label>
               <div className="relative">
                <FileBadge className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="cpf" type="text" placeholder="000.000.000-00" required 
                  value={cpf} onChange={(e) => setCpf(e.target.value)}
                  className="rounded-lg pl-10 bg-input/50 border-teal-dark/50 focus:border-teal-light" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center space-x-2 pt-2"
            >
              <Checkbox 
                id="biometrics" 
                checked={useBiometrics}
                onCheckedChange={setUseBiometrics}
                className="rounded border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <Label htmlFor="biometrics" className="text-sm font-medium flex items-center">
                <Fingerprint className="mr-2 h-5 w-5 text-teal-light" /> Usar biometria para login rápido
              </Label>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0, duration: 0.5 }}>
              <Button type="submit" className="w-full rounded-lg bg-gradient-to-r from-teal-dark to-teal-deep hover:from-teal-deep hover:to-teal-dark transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg shadow-teal-dark/30">
                <UserPlus className="mr-2 h-5 w-5" /> {socialProvider ? "Finalizar Cadastro" : "Cadastrar"}
              </Button>
            </motion.div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}>
            <p className="text-sm text-muted-foreground">
              Já tem uma conta?{' '}
              <Button variant="link" onClick={() => navigate('/')} className="text-teal-light hover:text-teal-dark p-0 h-auto font-semibold">
                Faça login
              </Button>
            </p>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CreateAccountPage;