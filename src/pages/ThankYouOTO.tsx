import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/final-logo.png" 
            alt="Chaikin Analytics Logo" 
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-600" />
        </div>

        {/* Bridge Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            Survey
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hey! If you are interested in learning more about a free trial to see update alerts minute to minute stocks that fit this criteria -
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => window.open('https://secure.chaikinanalytics.com/?cid=MKT846562&eid=MKT847536&assetId=AST377293&page=3', '_blank')}
            >
              Visit Offer
            </Button>
            <Link to="/pdf-download">
              <Button variant="outline" size="lg">
                Take me To PDF
              </Button>
            </Link>
          </div>
        </div>

        {/* 7 Day Free Trial Offer */}
        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  7 Day Free Trial
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  You've just discovered a small piece of the opportunity.
                </p>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  The truth is, every week new attention flows into the NFL — and into the companies tied to it.
                </p>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  That means more stocks are moving, and if you wait until next season, you'll miss it.
                </p>
              </div>

              {/* Champions Newsletter */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 text-center">
                  The Champions Newsletter
                </h3>
                <p className="text-lg text-slate-700 text-center">
                  A weekly playbook where I'll:
                </p>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Tell you exactly which stocks to buy and when to sell.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Send you weekly guidance directly to your inbox.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Act like your personal coach, pointing you toward "championship stocks."</span>
                  </li>
                </ul>
              </div>

              {/* Special Offer */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold">
                  <Star className="w-5 h-5" />
                  Special One-Time Offer
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  For new subscribers only
                </h3>
                <p className="text-lg text-slate-700">
                  You can start a <strong>7-day free trial</strong> of the Champions Newsletter.
                </p>
              </div>

              {/* What You Get */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h4 className="text-xl font-bold text-slate-900 text-center mb-6">
                  Inside, you'll get:
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Weekly stock picks tied to cultural momentum.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Simple, AI-powered analysis that tracks where money is flowing.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Step-by-step guidance to help you trade like a pro.</span>
                  </div>
                </div>
              </div>

              {/* Urgency Section */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                  <Clock className="w-5 h-5" />
                  ⚡ This Offer Is Only Available On This Page
                </div>
                <p className="text-lg text-slate-700 font-medium">
                  "Once you leave, this one-time free trial disappears. Don't miss your chance to join the only system designed to help you cash in on the biggest attention wave in America."
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-bold"
                  onClick={() => window.open('https://secure.chaikinanalytics.com/?cid=MKT846562&eid=MKT847536&assetId=AST377293&page=3', '_blank')}
                >
                  👉 Start My 7-Day Free Trial Now
                </Button>
              </div>

              {/* Guarantee */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 space-y-3">
                <h4 className="text-xl font-bold text-slate-900 text-center">
                  Guarantee / Risk Reversal
                </h4>
                <ul className="space-y-2 max-w-2xl mx-auto">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Try it for 7 days, cancel anytime.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">No risk — keep your free report even if you cancel.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">If you're serious about investing smarter this season, this is the next step.</span>
                  </li>
                </ul>
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