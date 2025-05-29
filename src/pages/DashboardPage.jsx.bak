import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Landmark, DollarSign, Activity, PieChart, BarChart3 } from 'lucide-react';

const investmentsData = [
  { id: 1, name: 'Ações XPTO', institution: 'Corretora Alfa', value: 15032.75, change: 2.5, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 2, name: 'Tesouro Direto Selic', institution: 'Banco Beta', value: 8500.00, change: 0.8, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 3, name: 'Fundo Imobiliário KNSC11', institution: 'Corretora Gama', value: 22000.50, change: -0.5, changeType: 'negative', icon: <TrendingDown className="text-red-500" /> },
  { id: 4, name: 'CDB PagSeguro', institution: 'PagBank', value: 5000.00, change: 1.2, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 5, name: 'Criptomoedas (BTC)', institution: 'Binance', value: 120340.00, change: 5.1, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
];

const totalInvestments = investmentsData.reduce((sum, item) => sum + item.value, 0);
const overallChange = investmentsData.reduce((sum, item) => sum + (item.value * item.change / 100 * (item.changeType === 'positive' ? 1 : -1)), 0);
const overallChangePercentage = totalInvestments > 0 ? (overallChange / totalInvestments) * 100 : 0;


const DashboardPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 py-8"
    >
      <motion.div variants={itemVariants} className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text mb-1">Dashboard de Rendimentos</h1>
        <p className="text-muted-foreground">Acompanhe a performance dos seus investimentos.</p>
      </motion.div>


      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-xl">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <PieChart className="h-6 w-6 text-primary" />
              <CardTitle>Divisão de Rendimentos</CardTitle>
            </div>
            <CardDescription>Distribuição percentual por instituição.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-teal-dark/10 to-teal-deep/10 rounded-lg flex items-center justify-center">
              <img  alt="Gráfico de pizza de exemplo mostrando a divisão de investimentos por instituição financeira" class=" w-full h-full object-contain rounded-lg" src="../img/distribuicao.png" />
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-xl">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <CardTitle>Evolução de Rendimentos</CardTitle>
            </div>
            <CardDescription>Performance ao longo do tempo.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-teal-dark/10 to-teal-deep/10 rounded-lg flex items-center justify-center">
              <img  alt="Gráfico de linha de exemplo mostrando a evolução de rendimentos ao longo do tempo" class="absolute w-full h-full object-contain rounded-lg" src="../img/evolucao.png" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 bg-gradient-to-br from-teal-deep/80 to-teal-dark/80 border-teal-light/30 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-primary-foreground">Patrimônio Total</CardTitle>
            <DollarSign className="h-6 w-6 text-teal-light" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary-foreground">
              R$ {totalInvestments.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className={`text-xs ${overallChangePercentage >= 0 ? 'text-green-300' : 'text-red-300'}`}>
              {overallChangePercentage >= 0 ? '+' : ''}
              {overallChangePercentage.toFixed(2)}% no último período
            </p>
          </CardContent>
        </Card>
         <Card className="md:col-span-1 bg-gradient-to-br from-card to-background border-teal-dark/30 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Rendimento Total</CardTitle>
            <Activity className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${overallChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              R$ {overallChange.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
             <p className="text-xs text-muted-foreground">
              Variação consolidada
            </p>
          </CardContent>
        </Card>
        <Card className="md:col-span-1 bg-gradient-to-br from-card to-background border-teal-dark/30 rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Instituições Conectadas</CardTitle>
            <Landmark className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {new Set(investmentsData.map(item => item.institution)).size}
            </div>
             <p className="text-xs text-muted-foreground">
              Fontes de dados ativas
            </p>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Detalhes dos Investimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentsData.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants} custom={index}>
              <Card className="hover:shadow-teal-dark/30 hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    {item.icon}
                  </div>
                  <CardDescription className="flex items-center">
                    <Landmark className="h-4 w-4 mr-2 text-muted-foreground" /> {item.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">
                    R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className={`text-sm font-medium ${item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.changeType === 'positive' ? '+' : ''}{item.change}%
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default DashboardPage;