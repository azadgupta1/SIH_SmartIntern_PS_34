import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="government-container">
        <div className="py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">PM Internship Scheme</h3>
              <p className="text-sm text-muted-foreground">
                Empowering Indian youth with AI-powered internship
                recommendations.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    About Scheme
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Guidelines
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    FAQ
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Contact
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Help Center
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Technical Support
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Feedback
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Report Issue
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Government Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Official Portal
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Digital India
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    MyGov
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    RTI
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 PM Internship Scheme. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-xs">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-xs">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto text-xs">
              Accessibility
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
