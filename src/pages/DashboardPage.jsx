import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Landmark, DollarSign, Activity, PieChart, BarChart3, Filter, X, Layers, Banknote, Briefcase, Bitcoin } from 'lucide-react';

const investmentsData = [
  { id: 1, name: 'Ações XPTO', institution: 'Corretora Alfa', type: 'Renda Variável', value: 15032.75, change: 2.5, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 2, name: 'Tesouro Direto Selic', institution: 'Tesouro Direto', type: 'Tesouro Público', value: 8500.00, change: 0.8, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 3, name: 'Fundo Imobiliário KNSC11', institution: 'Corretora Gama', type: 'Fundos', value: 22000.50, change: -0.5, changeType: 'negative', icon: <TrendingDown className="text-red-500" /> },
  { id: 4, name: 'CDB PagSeguro', institution: 'Banco do Brasil', type: 'Renda Fixa', value: 5000.00, change: 1.2, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 5, name: 'Criptomoedas (BTC)', institution: 'Criptos', type: 'Renda Variável', value: 120340.00, change: 5.1, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 6, name: 'LCI Banco Inter', institution: 'XP', type: 'Renda Fixa', value: 30000.00, change: 1.0, changeType: 'positive', icon: <TrendingUp className="text-green-500" /> },
  { id: 7, name: 'Ações MGLU3', institution: 'Bolsa', type: 'Renda Variável', value: 7800.00, change: -1.5, changeType: 'negative', icon: <TrendingDown className="text-red-500" /> },
];

const totalInvestments = investmentsData.reduce((sum, item) => sum + item.value, 0);
const overallChange = investmentsData.reduce((sum, item) => sum + (item.value * item.change / 100 * (item.changeType === 'positive' ? 1 : -1)), 0);
const overallChangePercentage = totalInvestments > 0 ? (overallChange / totalInvestments) * 100 : 0;

const assetTypes = [
  { label: "Renda Fixa", value: "Renda Fixa", icon: <Banknote className="mr-2 h-4 w-4" /> },
  { label: "Tesouro Público", value: "Tesouro Público", icon: <Landmark className="mr-2 h-4 w-4" /> },
  { label: "Renda Variável", value: "Renda Variável", icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { label: "Fundos", value: "Fundos", icon: <Layers className="mr-2 h-4 w-4" /> },
];

const financialInstitutions = [
  { label: "XP", value: "XP", icon: <DollarSign className="mr-2 h-4 w-4" /> },
  { label: "Tesouro Direto", value: "Tesouro Direto", icon: <Landmark className="mr-2 h-4 w-4" /> },
  { label: "Banco do Brasil", value: "Banco do Brasil", icon: <Landmark className="mr-2 h-4 w-4" /> },
  { label: "Bolsa", value: "Bolsa", icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { label: "Criptos", value: "Criptos", icon: <Bitcoin className="mr-2 h-4 w-4" /> },
];


const DashboardPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeAssetTypes, setActiveAssetTypes] = useState([]);
  const [activeInstitutions, setActiveInstitutions] = useState([]);

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

  const filterPanelVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { opacity: 1, height: 'auto', y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, height: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const toggleFilter = (filterList, setFilterList, value) => {
    if (filterList.includes(value)) {
      setFilterList(filterList.filter(item => item !== value));
    } else {
      setFilterList([...filterList, value]);
    }
  };
  
  const filteredInvestments = investmentsData.filter(item => {
    const assetTypeMatch = activeAssetTypes.length === 0 || activeAssetTypes.includes(item.type);
    const institutionMatch = activeInstitutions.length === 0 || activeInstitutions.includes(item.institution);
    return assetTypeMatch && institutionMatch;
  });

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 py-8 relative"
    >
      <div className="flex justify-between items-center">
        <motion.div variants={itemVariants} className="text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Acompanhe a performance dos seus investimentos.</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="rounded-lg border-primary text-primary hover:bg-primary/10">
            {showFilters ? <X className="mr-2 h-5 w-5" /> : <Filter className="mr-2 h-5 w-5" />}
            {showFilters ? 'Fechar Filtros' : 'Filtros'}
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            key="filter-panel"
            variants={filterPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-card/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-teal-dark/50 space-y-6 sticky top-[calc(var(--header-height,60px)+1rem)] z-40"
          >
            <div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-3">Tipos de Ativos</h3>
              <div className="flex flex-wrap gap-2">
                {assetTypes.map(type => (
                  <Button
                    key={type.value}
                    variant={activeAssetTypes.includes(type.value) ? "default" : "secondary"}
                    size="sm"
                    onClick={() => toggleFilter(activeAssetTypes, setActiveAssetTypes, type.value)}
                    className={`rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 
                                ${activeAssetTypes.includes(type.value) 
                                  ? 'bg-teal-light text-background hover:bg-teal-light/90' 
                                  : 'bg-teal-dark/50 text-teal-light hover:bg-teal-dark/70'}`}
                  >
                    {type.icon} {type.label}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-3">Instituição Financeira</h3>
              <div className="flex flex-wrap gap-2">
                {financialInstitutions.map(inst => (
                  <Button
                    key={inst.value}
                    variant={activeInstitutions.includes(inst.value) ? "default" : "secondary"}
                    size="sm"
                    onClick={() => toggleFilter(activeInstitutions, setActiveInstitutions, inst.value)}
                    className={`rounded-full transition-all duration-200 ease-in-out transform hover:scale-105
                                ${activeInstitutions.includes(inst.value) 
                                  ? 'bg-teal-light text-background hover:bg-teal-light/90' 
                                  : 'bg-teal-dark/50 text-teal-light hover:bg-teal-dark/70'}`}
                  >
                   {inst.icon} {inst.label}
                  </Button>
                ))}
              </div>
            </div>
             <div className="flex justify-end space-x-2 pt-4">
                <Button 
                    variant="ghost" 
                    onClick={() => { setActiveAssetTypes([]); setActiveInstitutions([]);}}
                    className="text-muted-foreground hover:text-primary"
                >
                    Limpar Filtros
                </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
              <img  alt="Gráfico de pizza de exemplo mostrando a divisão de investimentos por instituição financeira" class=" w-full h-full object-contain rounded-lg" src="../img/distribuicao.svg" />
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
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Detalhes dos Investimentos { (activeAssetTypes.length > 0 || activeInstitutions.length > 0) && `(Filtrado - ${filteredInvestments.length} resultados)`}
        </h2>
        {filteredInvestments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInvestments.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants} custom={index}>
                <Card className="hover:shadow-teal-dark/30 hover:shadow-lg transition-shadow duration-300 rounded-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      {item.icon}
                    </div>
                    <CardDescription className="flex items-center">
                      <Landmark className="h-4 w-4 mr-2 text-muted-foreground" /> {item.institution}  
                      <span className="mx-2 text-muted-foreground">|</span>
                      <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" /> {item.type}
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
        ) : (
          <motion.div variants={itemVariants} className="text-center py-10">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">Nenhum investimento encontrado.</p>
            <p className="text-sm text-muted-foreground">Tente ajustar seus filtros.</p>
          </motion.div>
        )}
      </motion.div>

    </motion.div>
  );
};

export default DashboardPage;
