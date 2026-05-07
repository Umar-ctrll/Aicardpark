import { Globe, ExternalLink } from "lucide-react";
import {
  PHONE_NUMBER,
  EMAIL,
  COMPANY_NAME,
  COMPANY_ADDRESS,
} from "@/lib/constants";

const quickLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "GDPR Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-hero border-t border-dark-surface">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-primary" />
              <span className="font-display font-bold text-lg text-white">
                AI Car Park
              </span>
            </div>
            <p className="text-sm text-text-muted font-body leading-relaxed">
              AI-powered parking management for private operators. Automate
              enforcement, payments, and reporting.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-text-muted hover:text-purple-primary hover:border-purple-primary transition-all"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-text-muted hover:text-purple-primary hover:border-purple-primary transition-all"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted font-body hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted font-body hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-text-muted font-body">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>{COMPANY_ADDRESS}</li>
              <li className="text-text-muted/70">{COMPANY_NAME}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-surface">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-[#475569] font-body">
            &copy; {new Date().getFullYear()} AI Car Park &middot;{" "}
            {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-[#475569] font-body">
            GDPR Compliant &middot; Stripe Secured
          </p>
        </div>
      </div>
    </footer>
  );
}
