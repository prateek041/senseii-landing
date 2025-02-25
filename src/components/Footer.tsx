import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 md:py-16">
        <div className="md:flex flex-col grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 px-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Senseii</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Enabling you to lead a healthy Life.
            </p>
          </div>

          <div className="flex md:flex flex-row items-center justify-between px-2">
            <div >
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link href="https://github.com/Senseii-ai" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="https://github.com/Senseii-ai" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
                <li><Link href="https://github.com/Senseii-ai" className="text-sm text-muted-foreground hover:text-foreground">Guides</Link></li>
                <li><a href="mailto:prateeksingh9741@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="https://github.com/Senseii-ai" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link href="https://www.prateeksingh.tech/writings/tech/building-senseii/llm-orchestrator" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><a href="mailto:prateeksingh9741@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} senseii. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6"> */}
          {/*   <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link> */}
          {/*   <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link> */}
          {/*   <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
