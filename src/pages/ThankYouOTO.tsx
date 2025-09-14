import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Star } from "lucide-react";

const ThankYouOTO = () => {
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
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-600" />
        </div>

        {/* Thank You Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            Thank You!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your purchase has been confirmed. You're now ready to start your NFL trading journey!
          </p>
        </div>

        {/* One Time Offer */}
        <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur border-2 border-amber-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* OTO Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <Clock className="w-4 h-4" />
                  LIMITED TIME OFFER
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Exclusive One-Time Upgrade
                </h2>
                <p className="text-slate-600">
                  Get our Advanced Trading Signals Package at 70% OFF
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="text-center space-y-2">
                  <Star className="w-8 h-8 text-amber-500 mx-auto" />
                  <h3 className="font-semibold">Real-Time Alerts</h3>
                  <p className="text-sm text-slate-600">Get instant notifications for trading opportunities</p>
                </div>
                <div className="text-center space-y-2">
                  <Star className="w-8 h-8 text-amber-500 mx-auto" />
                  <h3 className="font-semibold">Expert Analysis</h3>
                  <p className="text-sm text-slate-600">Professional insights from NFL trading experts</p>
                </div>
                <div className="text-center space-y-2">
                  <Star className="w-8 h-8 text-amber-500 mx-auto" />
                  <h3 className="font-semibold">Priority Support</h3>
                  <p className="text-sm text-slate-600">24/7 dedicated customer support</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-slate-500">Regular Price: <span className="line-through">$297</span></p>
                  <p className="text-4xl font-bold text-green-600">$89</p>
                  <p className="text-sm text-slate-600">One-time payment • Lifetime access</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                    Yes, Upgrade Now!
                  </Button>
                  <Button variant="outline" size="lg">
                    No Thanks, Continue
                  </Button>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <p className="text-red-700 font-semibold">
                  ⏰ This offer expires in 15 minutes or when you leave this page
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p>Questions? Contact our support team at support@nflstocks.com</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouOTO;