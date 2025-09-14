import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, DollarSign, Target, Shield, Users, Zap, CheckCircle2, Star, Trophy, BarChart3 } from "lucide-react";

const bookCover = "/lovable-uploads/nfl-stocks-book-cover.png";

const TradingLandingPage = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) {
      toast({
        title: "Please complete the form",
        description: "Enter your email and agree to receive updates.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You'll receive your free NFL stocks report shortly.",
    });
    
    // Navigate to thank you page
    navigate("/thank-you-oto");
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: '#fafafa',
        backgroundImage: `
          radial-gradient(circle at 25px 25px, rgba(0,0,0,0.02) 2px, transparent 2px),
          radial-gradient(circle at 75px 75px, rgba(0,0,0,0.015) 1px, transparent 1px),
          linear-gradient(45deg, transparent 24%, rgba(0,0,0,0.005) 25%, rgba(0,0,0,0.005) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.005) 75%, rgba(0,0,0,0.005) 76%, transparent 77%),
          linear-gradient(-45deg, transparent 24%, rgba(0,0,0,0.008) 25%, rgba(0,0,0,0.008) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.008) 75%, rgba(0,0,0,0.008) 76%, transparent 77%),
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.01) 2px, rgba(0,0,0,0.01) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.01) 2px, rgba(0,0,0,0.01) 4px)
        `,
        backgroundSize: '50px 50px, 100px 100px, 25px 25px, 25px 25px, 4px 4px, 4px 4px',
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.02)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Mobile-first container */}
      <div className="w-full max-w-lg mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          
          {/* Main Headline with dramatic effect */}
          <div className="space-y-6 animate-bounce-in">
            <div className="flex justify-center mb-2.5">
              <img 
                src="/lovable-uploads/chaikin-logo-final.png" 
                alt="Chaikin Analytics Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black leading-tight text-slate-900 drop-shadow-sm">
              <span className="text-slate-900 font-extrabold">
                7 NFL Stocks About To
              </span>
              <br />
              <span className="text-slate-900">Ready to</span>{" "}
              <span 
                className="text-accent font-extrabold"
                style={{
                  textShadow: '0 0 20px hsl(43 96% 56% / 0.3)'
                }}
              >
                EXPLODE
              </span>
              <br />
              <span className="text-slate-900">This Season</span>
            </h1>
            
            <div className="space-y-3">
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                The NFL just kicked off — and <strong className="text-slate-900">billions of dollars</strong> are flowing through the companies powering America's #1 sport.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-accent font-bold text-sm animate-bounce">
                <Zap className="w-4 h-4" />
                <p>Get the free report and see which stocks could surge this season.</p>
                <Zap className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Hero Section - Free PDF Report Reveals */}
          <div 
            className="rounded-3xl p-8 space-y-6 backdrop-blur-lg border border-white/20 animate-scale-in"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card-hover)',
              transition: 'var(--transition-smooth)'
            }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-bold text-foreground">
                Free PDF Report Reveals:
              </h2>
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-success/10 to-accent/10 border border-success/20 hover:shadow-lg transition-all duration-300">
                <Target className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-medium">The <em>7 companies tied to NFL momentum</em> most investors are overlooking.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 hover:shadow-lg transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-medium">Why football season is one of the most profitable times of the year for these stocks.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <Zap className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-medium">How you can position yourself early before Wall Street piles in.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-accent font-bold text-lg animate-bounce">
                <span>👉</span>
                <p>Enter your email below for instant access.</p>
                <span>👈</span>
              </div>
            </div>
          </div>

          {/* Book Cover & Form Container */}
          <div 
            className="rounded-3xl p-8 space-y-8 backdrop-blur-lg border border-white/20 animate-slide-up"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card-hover)',
              transition: 'var(--transition-smooth)'
            }}
          >
            {/* Book Cover */}
            <div className="flex justify-center">
              <div 
                className="relative group"
                style={{ 
                  filter: 'drop-shadow(var(--shadow-book))',
                  transition: 'var(--transition-spring)'
                }}
              >
                <img
                  src={bookCover}
                  alt="7 NFL Stocks Ready to Explode This Season - Free Report"
                  className="w-52 h-72 object-cover rounded-2xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 shadow-2xl border-4 border-white/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 text-center text-lg rounded-2xl border-2 border-accent/30 focus:border-accent bg-white/90 backdrop-blur-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <DollarSign className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left bg-white/50 p-4 rounded-xl">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-1 data-[state=checked]:bg-success data-[state=checked]:border-success"
                />
                <label 
                  htmlFor="consent" 
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer font-medium"
                >
                  By opting in, you consent to receive content and marketing emails. Opt out at any time.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-16 text-lg font-bold rounded-2xl border-2 border-white/30 hover:border-white/50 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'var(--gradient-success)',
                  boxShadow: 'var(--shadow-accent)',
                  transition: 'var(--transition-spring)',
                  color: 'black'
                }}
                disabled={!email || !consent}
              >
                <Star className="w-6 h-6 mr-3" />
                Get My Free Report
                <Star className="w-6 h-6 ml-3" />
              </Button>
            </form>
          </div>

          {/* Proof Section */}
          <div 
            className="rounded-3xl p-8 space-y-6 backdrop-blur-lg border border-white/20 animate-fade-in"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)',
              transition: 'var(--transition-smooth)',
              animationDelay: '0.3s'
            }}
          >
            <div className="grid gap-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-success/20 to-success/10 border border-success/30">
                <Trophy className="w-8 h-8 text-success flex-shrink-0" />
                <p className="text-foreground font-semibold">The Dallas Cowboys are worth over <span className="text-success font-black text-lg">$5 billion</span>.</p>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30">
                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-foreground font-semibold">The NFL pulled in <span className="text-primary font-black text-lg">500 million viewers</span> opening weekend.</p>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
                <TrendingUp className="w-8 h-8 text-accent flex-shrink-0" />
                <p className="text-foreground font-semibold">Expansion into <span className="text-accent font-black">Brazil and global markets</span> is unlocking brand-new sponsorship streams.</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-foreground/10 to-foreground/5 border border-foreground/20">
              <p className="text-foreground font-bold text-lg">
                Where attention goes, money flows. These stocks are positioned to <span className="text-success">WIN</span>.
              </p>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div 
            className="rounded-3xl p-8 space-y-6 backdrop-blur-lg border border-white/20 animate-scale-in"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card-hover)',
              transition: 'var(--transition-smooth)',
              animationDelay: '0.4s'
            }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-foreground mb-2">
                What You'll Learn Inside the Report
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-success mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-r from-success/10 to-transparent border border-success/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <p className="text-foreground font-semibold">7 NFL-linked stocks that could surge this season.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <p className="text-foreground font-semibold">How each company profits directly from football.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <p className="text-foreground font-semibold">Why this "picks & shovels" play is smarter than gambling on games.</p>
              </div>
            </div>
          </div>

          {/* Second Call to Action */}
          <div 
            className="rounded-3xl p-8 space-y-6 backdrop-blur-lg border border-white/20 animate-bounce-in"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-accent)',
              transition: 'var(--transition-smooth)',
              animationDelay: '0.5s'
            }}
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 text-accent font-bold text-lg">
                <span>👉</span>
                <p>Don't just watch football season — own a piece of it.</p>
                <span>👈</span>
              </div>
              
              <p className="text-slate-800 text-lg font-semibold">
                Enter your email now and get <span className="text-success font-black">instant access</span> to{" "}
                <em className="text-accent font-bold">7 NFL Stocks Ready to Explode This Season.</em>
              </p>
              
              <Button
                onClick={() => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  emailInput?.focus();
                  emailInput?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full h-16 text-lg font-bold rounded-2xl border-2 border-white/30 hover:border-white/50 transform hover:scale-105 active:scale-95"
                style={{
                  background: 'var(--gradient-accent)',
                  boxShadow: 'var(--shadow-glow)',
                  transition: 'var(--transition-spring)',
                  color: 'black'
                }}
              >
                <Trophy className="w-6 h-6 mr-3" />
                Claim My Free Report
                <Trophy className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>

          {/* Reassurance Section */}
          <div 
            className="rounded-3xl p-6 backdrop-blur-lg border border-white/20 animate-fade-in"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)',
              transition: 'var(--transition-smooth)',
              animationDelay: '0.6s'
            }}
          >
            <div className="grid grid-cols-1 gap-3 text-center">
              <div className="flex items-center justify-center space-x-3 text-success font-semibold">
                <Shield className="w-5 h-5" />
                <p>100% Free — no credit card required.</p>
              </div>
              <div className="flex items-center justify-center space-x-3 text-success font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <p>Cancel anytime.</p>
              </div>
              <div className="flex items-center justify-center space-x-3 text-success font-semibold">
                <Star className="w-5 h-5" />
                <p>Keep the report no matter what.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingLandingPage;