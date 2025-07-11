import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission with timestamp
      const timestamp = new Date().toISOString();
      console.log("=".repeat(50));
      console.log(`📧 NEW CONTACT FORM SUBMISSION - ${timestamp}`);
      console.log("=".repeat(50));
      console.log(`Name: ${validatedData.name}`);
      console.log(`Email: ${validatedData.email}`);
      console.log(`Company: ${validatedData.company || 'Not provided'}`);
      console.log(`Subject: ${validatedData.subject}`);
      console.log(`Message: ${validatedData.message}`);
      console.log("=".repeat(50));
      
      // Here you would typically:
      // 1. Save the message to a database
      // 2. Send an email notification
      // 3. Send an auto-response email to the user
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. I will get back to you soon!" 
      });
    } catch (error) {
      console.error("Contact form validation error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs and try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
