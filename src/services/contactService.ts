export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const contactService = {
  submitForm: async (data: ContactFormData): Promise<{ success: boolean }> => {
    // Placeholder: replace with a real API call or email service
    console.log("Contact form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true };
  },
};
