import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, BarChart2, Briefcase, Menu, X, LogOut, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/home', label: 'Início', icon: HomeIcon }, // Tela 3
  { path: '/open-finance', label: 'Open Finance', icon: Briefcase }, // Tela 4
  { path: '/dashboard', label: 'Dashboard', icon: BarChart2 }, // Tela 6 (conforme dashboard)
  { path: '/settings', label: 'Configurações', icon: Settings }, // Tela 5
];

const Layout = ({ children, logoUrl }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isAuthPage = location.pathname === '/' || location.pathname === '/create-account';

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    navigate('/');
  };

  const sidebarVariants = {
    open: { x: 0, transition: { type: "tween", duration: 0.3 } },
    closed: { x: "-100%", transition: { type: "tween", duration: 0.3 } },
  };

  const backdropVariants = {
    open: { opacity: 1, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" },
  };

  if (isAuthPage) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={logoUrl} alt="UniVest Logo" className="h-10 w-10 rounded-md" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text">
              UniVest
            </span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleLogout} className="hidden md:inline-flex text-muted-foreground hover:text-primary">
              <LogOut className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden text-muted-foreground hover:text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 border-r border-border/40 bg-background/80 p-4 sticky top-16 h-[calc(100vh-4rem)]">
          <nav className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                asChild
                className="w-full justify-start rounded-lg text-left"
                onClick={() => navigate(item.path)}
              >
                <Link to={item.path} className="flex items-center space-x-3 px-3 py-2">
                  <item.icon className={`h-5 w-5 ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`${location.pathname === item.path ? 'text-primary-foreground' : 'text-foreground'}`}>{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
          <div className="mt-auto pt-4 border-t border-border/40">
             <Button variant="ghost" onClick={handleLogout} className="w-full justify-start rounded-lg text-left text-muted-foreground hover:text-primary">
                <LogOut className="mr-3 h-5 w-5" />
                Sair
              </Button>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                variants={backdropVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={toggleSidebar}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />
              <motion.div
                variants={sidebarVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 left-0 h-full w-64 bg-background shadow-xl z-50 p-4 md:hidden flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                   <Link to="/home" className="flex items-center space-x-2" onClick={toggleSidebar}>
                     <img src={logoUrl} alt="UniVest Logo" className="h-8 w-8 rounded-md" />
                     <span className="text-xl font-bold bg-gradient-to-r from-teal-light to-teal-dark text-transparent bg-clip-text">UniVest</span>
                   </Link>
                  <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                    <X className="h-6 w-6 text-muted-foreground" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2 flex-grow">
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      variant={location.pathname === item.path ? "secondary" : "ghost"}
                      asChild
                      className="w-full justify-start rounded-lg text-left"
                      onClick={() => { navigate(item.path); toggleSidebar(); }}
                    >
                      <Link to={item.path} className="flex items-center space-x-3 px-3 py-2">
                        <item.icon className={`h-5 w-5 ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`${location.pathname === item.path ? 'text-primary-foreground' : 'text-foreground'}`}>{item.label}</span>
                      </Link>
                    </Button>
                  ))}
                </nav>
                <div className="mt-auto pt-4 border-t border-border/40">
                    <Button variant="ghost" onClick={() => { handleLogout(); toggleSidebar(); }} className="w-full justify-start rounded-lg text-left text-muted-foreground hover:text-primary">
                        <LogOut className="mr-3 h-5 w-5" />
                        Sair
                    </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      
        <main className="flex-1 container py-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {!isAuthPage && (
        <footer className="py-6 md:px-8 md:py-0 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} UniVest. Todos os direitos reservados.
            </p>
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Desenvolvido com <span className="text-teal-light">💡</span> por Grupo 24.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;