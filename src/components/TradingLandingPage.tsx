import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
const bookCover = "/lovable-uploads/711aef28-d7d7-4218-8e69-977a942c1811.png";

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
      description: "You'll receive your free indicator guide shortly.",
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
              Buy the Stock When it Touches{" "}
              <span className="text-accent font-extrabold">THIS ONE Line</span>{" "}
              on the Chart
            </h1>
            
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              My free book shares the #1 spot to buy and the{" "}
              <span className="font-semibold text-accent">FREE indicator</span>{" "}
              that alerts you
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
                  alt="Motivational Quote - Don't let people steal your joy, be happy"
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
                  By opting in, you consent to receive content and marketing emails from T3 Live. Opt out at any time.
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
                Get Your Free Indicator
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingLandingPage;