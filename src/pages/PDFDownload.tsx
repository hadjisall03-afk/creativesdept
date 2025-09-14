import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PDFDownload = () => {
  const handleDownload = () => {
    // Create a temporary download link for the PDF
    const link = document.createElement('a');
    link.href = '/lovable-uploads/nfl-stocks-book-cover.png'; // Placeholder until actual PDF is provided
    link.download = 'nfl-stocks-guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Back Button */}
        <div className="flex justify-start mb-6">
          <Link to="/thank-you-oto">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>

        {/* PDF Icon */}
        <div className="flex justify-center mb-6">
          <FileText className="w-20 h-20 text-blue-600" />
        </div>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            Download Your Free NFL Stocks Guide
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get instant access to our comprehensive guide on NFL-related stock opportunities.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* What's Inside */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  What's Inside This Guide:
                </h2>
                <div className="space-y-3 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Key NFL-related stocks to watch during football season</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Analysis of cultural momentum and market trends</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Strategic timing for maximizing investment returns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Exclusive insights from market experts</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-bold"
                  onClick={handleDownload}
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download PDF Now
                </Button>
                <p className="text-sm text-slate-500">
                  No email required • Instant download • 100% Free
                </p>
              </div>

              {/* Bonus Section */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  Hidden Bonus Consultation Call Included
                </h3>
                <p className="text-slate-700 text-center">
                  Get exclusive access to our "Championship Stock Checklist" - a simple framework for evaluating NFL-related investment opportunities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <p className="text-lg text-slate-600">
            Want more insights like this?
          </p>
          <Link to="/thank-you-oto">
            <Button variant="outline" size="lg">
              Learn About Our Newsletter
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p>Questions? Contact our support team at support@nflstocks.com</p>
        </div>
      </div>
    </div>
  );
};

export default PDFDownload;