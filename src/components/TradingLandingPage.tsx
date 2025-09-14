import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
const bookCover = "/lovable-uploads/nfl-stocks-book-cover.png";

const TradingLandingPage = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

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
    
    // Reset form
    setEmail("");
    setConsent(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold leading-tight text-foreground">
              <span className="text-accent font-extrabold">7 NFL Stocks</span>{" "}
              Ready to Explode This Season
            </h1>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              The NFL just kicked off — and billions of dollars are flowing through the companies powering America's #1 sport.
            </p>
            
            <p className="text-muted-foreground text-xs leading-relaxed italic">
              Get the <span className="font-semibold text-accent">free report</span> and see which stocks could surge this season.
            </p>
          </div>

          {/* Hero Section - Free PDF Report Reveals */}
          <div 
            className="bg-card rounded-2xl p-6 space-y-4"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <h2 className="text-lg font-bold text-center text-foreground">
              Free PDF Report Reveals:
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <span className="text-accent font-bold">•</span>
                <p>The <em>7 companies tied to NFL momentum</em> most investors are overlooking.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent font-bold">•</span>
                <p>Why football season is one of the most profitable times of the year for these stocks.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent font-bold">•</span>
                <p>How you can position yourself early before Wall Street piles in.</p>
              </div>
            </div>
            <p className="text-center text-accent font-semibold text-sm">
              👉 Enter your email below for instant access.
            </p>
          </div>

          {/* Book Cover & Form Container */}
          <div 
            className="bg-card rounded-2xl p-6 space-y-6"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            {/* Book Cover */}
            <div className="flex justify-center">
              <div 
                className="relative"
                style={{ 
                  filter: 'drop-shadow(var(--shadow-book))',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <img
                  src={bookCover}
                  alt="7 NFL Stocks Ready to Explode This Season - Free Report"
                  className="w-48 h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 text-center text-base rounded-xl border-2 border-muted focus:border-accent transition-colors bg-background"
                  required
                />
              </div>

              <div className="flex items-start space-x-3 text-left">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-0.5"
                />
                <label 
                  htmlFor="consent" 
                  className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                >
                  By opting in, you consent to receive content and marketing emails. Opt out at any time.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold rounded-xl"
                style={{
                  background: 'var(--gradient-accent)',
                  boxShadow: 'var(--shadow-accent)',
                  transition: 'var(--transition-smooth)'
                }}
                disabled={!email || !consent}
              >
                Get My Free Report
              </Button>
            </form>
          </div>

          {/* Proof Section */}
          <div 
            className="bg-card rounded-2xl p-6 space-y-4"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <span className="text-accent font-bold">•</span>
                <p>The Dallas Cowboys are worth over <strong>$5 billion</strong>.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent font-bold">•</span>
                <p>The NFL pulled in <strong>500 million viewers</strong> opening weekend.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent font-bold">•</span>
                <p>Expansion into <strong>Brazil and global markets</strong> is unlocking brand-new sponsorship streams.</p>
              </div>
            </div>
            <p className="text-center text-foreground font-semibold text-sm">
              Where attention goes, money flows. These stocks are positioned to win.
            </p>
          </div>

          {/* What You'll Learn Section */}
          <div 
            className="bg-card rounded-2xl p-6 space-y-4"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <h2 className="text-lg font-bold text-center text-foreground">
              What You'll Learn Inside the Report
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✅</span>
                <p>7 NFL-linked stocks that could surge this season.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✅</span>
                <p>How each company profits directly from football.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✅</span>
                <p>Why this "picks & shovels" play is smarter than gambling on games.</p>
              </div>
            </div>
          </div>

          {/* Second Call to Action */}
          <div 
            className="bg-card rounded-2xl p-6 space-y-4"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <p className="text-center text-accent font-semibold text-sm">
              👉 Don't just watch football season — own a piece of it.
            </p>
            <p className="text-center text-foreground text-sm">
              Enter your email now and get <strong>instant access</strong> to <em>7 NFL Stocks Ready to Explode This Season.</em>
            </p>
            <Button
              onClick={() => {
                const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                emailInput?.focus();
                emailInput?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full h-12 text-base font-semibold rounded-xl"
              style={{
                background: 'var(--gradient-accent)',
                boxShadow: 'var(--shadow-accent)',
                transition: 'var(--transition-smooth)'
              }}
            >
              Claim My Free Report
            </Button>
          </div>

          {/* Reassurance Section */}
          <div 
            className="bg-card rounded-2xl p-6"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div className="space-y-2 text-xs text-muted-foreground text-center">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <p>100% Free — no credit card required.</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <p>Cancel anytime.</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-500 font-bold">•</span>
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