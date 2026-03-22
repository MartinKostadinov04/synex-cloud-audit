import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Mail className="h-4 w-4" />
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and our team will get back to you within
            24 hours.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
          className="mt-4 space-y-5"
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="dialog-first-name">First name</Label>
              <Input id="dialog-first-name" name="first-name" autoComplete="given-name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dialog-last-name">Last name</Label>
              <Input id="dialog-last-name" name="last-name" autoComplete="family-name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-email">Email</Label>
            <Input id="dialog-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-message">Message</Label>
            <Textarea id="dialog-message" name="message" rows={4} />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
