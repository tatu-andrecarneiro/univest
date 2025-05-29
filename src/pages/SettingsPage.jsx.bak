
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Palette, Users, Shield, BarChartHorizontalBig, PlusCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddProfile = () => {
    toast({
      title: "Adicionar Novo Perfil",
      description: "Redirecionando para a tela de conexão Open Finance.",
    });
    navigate('/open-finance');
  };

  const handleSaveChanges = () => {
    toast({
      title: "Configurações Salvas",
      description: "Suas preferências foram atualizadas com sucesso!",
    });
  };
  
  const colorSchemes = [
    { name: "Padrão UniVest (Azul Petróleo)", bg: "bg-gradient-to-r from-teal-light to-teal-dark", value: "default" },
    { name: "Noturno Profundo", bg: "bg-gradient-to-r from-slate-700 to-slate-900", value: "dark_deep" },
    { name: "Amanhecer Dourado", bg: "bg-gradient-to-r from-amber-400 to-orange-600", value: "golden_dawn" },
    { name: "Floresta Esmeralda", bg: "bg-gradient-to-r from-green-500 to-emerald-700", value: "emerald_forest" },
  ];

  const chartModels = [
    { name: "Gráfico de Barras Moderno", icon: <BarChartHorizontalBig className="h-5 w-5 mr-2" />, value: "bar_modern" },
    { name: "Gráfico de Linha Suave", icon: <BarChartHorizontalBig className="h-5 w-5 mr-2" />, value: "line_smooth" }, // Placeholder icon
    { name: "Gráfico de Pizza Interativo", icon: <BarChartHorizontalBig className="h-5 w-5 mr-2" />, value: "pie_interactive" }, // Placeholder icon
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8 py-8"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text mb-2">Configurações</h1>
        <p className="text-muted-foreground">Personalize sua experiência no UniVest.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Segurança</CardTitle>
              </div>
              <CardDescription>Gerencie suas opções de segurança.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="2fa" defaultChecked className="rounded"/>
                <Label htmlFor="2fa">Ativar autenticação de dois fatores (2FA)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="biometric" className="rounded"/>
                <Label htmlFor="biometric">Login com biometria / Face ID</Label>
              </div>
              <div>
                <Label htmlFor="sessionTimeout">Tempo limite da sessão (minutos)</Label>
                <Input id="sessionTimeout" type="number" defaultValue="30" className="mt-1 rounded-lg" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Perfis (CPFs/CNPJs)</CardTitle>
              </div>
              <CardDescription>Adicione ou gerencie perfis conectados.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg bg-secondary/20">
                <p className="font-medium">CPF: ***.123.456-** (Principal)</p>
                <p className="text-sm text-muted-foreground">Conectado em: Banco Alfa, Corretora Beta</p>
              </div>
              <Button onClick={handleAddProfile} variant="outline" className="w-full rounded-lg border-primary text-primary hover:bg-primary/10">
                <PlusCircle className="mr-2 h-5 w-5" /> Adicionar Novo Perfil (CPF/CNPJ)
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Palette className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Esquema de Cores</CardTitle>
              </div>
              <CardDescription>Escolha o visual do aplicativo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {colorSchemes.map(scheme => (
                <Button key={scheme.value} variant="outline" className={`w-full justify-start rounded-lg ${scheme.value === 'default' ? 'border-primary ring-2 ring-primary' : 'border-muted-foreground'}`}>
                  <span className={`h-5 w-5 rounded-full mr-3 ${scheme.bg}`}></span>
                  {scheme.name}
                </Button>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:col-span-3">
           <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <BarChartHorizontalBig className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Modelos de Gráficos (Dashboard)</CardTitle>
              </div>
              <CardDescription>Selecione o estilo dos gráficos no seu dashboard.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chartModels.map(model => (
                 <Button key={model.value} variant="outline" className={`w-full justify-start p-4 h-auto flex-col items-start space-y-2 rounded-lg ${model.value === 'bar_modern' ? 'border-primary ring-2 ring-primary' : 'border-muted-foreground'}`}>
                  {React.cloneElement(model.icon, { className: "h-8 w-8 text-foreground mb-2" })}
                  <span className="text-sm">{model.name}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </motion.div>

      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex justify-end mt-8">
        <Button size="lg" onClick={handleSaveChanges} className="rounded-lg bg-gradient-to-r from-teal-dark to-teal-deep hover:from-teal-deep hover:to-teal-dark transition-all transform hover:scale-105">
          Salvar Alterações
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SettingsPage;
  