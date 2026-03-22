import { Building2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="relative isolate bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Left — Info */}
          <div className="max-w-xl">
            <p className="text-base font-semibold text-primary">Get in touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's discuss your compliance needs
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you need guidance on battery regulation, ESPR readiness,
              or digital product passports — our team is here to help.
            </p>

            <dl className="mt-10 space-y-6 text-sm text-muted-foreground">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  Musterstraße 42
                  <br />
                  80331 Munich, Germany
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="tel:+49 123 456 7890" className="hover:text-foreground transition-colors">
                    +49 123 456 7890
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="mailto:hello@synexcloud.com" className="hover:text-foreground transition-colors">
                    hello@synexcloud.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" name="first-name" autoComplete="given-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" name="last-name" autoComplete="family-name" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit">Send message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
