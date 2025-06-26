// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, chatHistory } = req.body;

    // Check if Azure OpenAI credentials are configured
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;

    // If Azure OpenAI is not configured, fall back to rule-based system
    if (!apiKey || !endpoint || !deploymentName) {
      console.warn('Azure OpenAI credentials not configured, falling back to rule-based system');
      return res.status(200).json({ response: getRuleBasedResponse(message) });
    }

    // Initialize Azure OpenAI client
    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(apiKey)
    );

    // Format chat history for Azure OpenAI
    const formattedHistory = chatHistory ? chatHistory.map(msg => ({
      role: msg.role,
      content: msg.content
    })) : [];

    // Prepare messages array with system message and chat history
    const messages = [
      {
        role: "system",
        content: `You are an AI assistant for MSQ IT, a managed services provider based in Brisbane, Australia. 
        You specialize in Microsoft 365, Azure, cybersecurity, ERP systems (especially Microsoft Dynamics 365 Business Central), 
        and general IT support for small to medium businesses. 
        Be helpful, professional, and concise. Always offer practical solutions to IT problems. 
        If you don't know something, suggest contacting the MSQ IT support team at support@msqit.com.au or (07) XXXX XXXX. 
        Do not make up information about MSQ IT's specific clients or internal processes.`
      },
      ...formattedHistory,
      {
        role: "user",
        content: message
      }
    ];

    // Call Azure OpenAI API
    const result = await client.getChatCompletions(
      deploymentName,
      messages,
      {
        maxTokens: 500,
        temperature: 0.7,
      }
    );

    // Extract response
    const response = result.choices[0].message.content;

    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    
    // If there's an error with the Azure OpenAI service, fall back to rule-based system
    if (error.message && (error.message.includes('Azure') || error.message.includes('OpenAI'))) {
      console.warn('Error with Azure OpenAI, falling back to rule-based system');
      return res.status(200).json({ 
        response: getRuleBasedResponse(req.body.message),
        fallback: true
      });
    }
    
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Fallback rule-based system
function getRuleBasedResponse(message) {
  const lowerCaseMessage = message.toLowerCase();
  
  if (lowerCaseMessage.includes('password') && lowerCaseMessage.includes('reset')) {
    return "I can help with password resets! Would you like me to guide you through our self-service password reset process or create a support ticket for you?";
  } else if (lowerCaseMessage.includes('microsoft') || lowerCaseMessage.includes('365') || lowerCaseMessage.includes('office')) {
    return "We provide comprehensive Microsoft 365 services including tenant configuration, email migration, and ongoing support. Would you like more information about our Microsoft services?";
  } else if (lowerCaseMessage.includes('security') || lowerCaseMessage.includes('cybersecurity') || lowerCaseMessage.includes('cyber')) {
    return "Security is our priority! We offer enterprise-grade cybersecurity solutions for small to medium businesses, including email protection, endpoint security, and security assessments. How can we help with your security needs?";
  } else if (lowerCaseMessage.includes('erp') || lowerCaseMessage.includes('dynamics') || lowerCaseMessage.includes('business central')) {
    return "Our team has strong expertise in Microsoft Dynamics 365 Business Central and Wiise ERP implementations. We can help streamline your operations with these powerful tools. Would you like to discuss your ERP needs?";
  } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('speak') || lowerCaseMessage.includes('human')) {
    return "I'd be happy to connect you with our team! You can reach us at support@msqit.com.au or call (07) XXXX XXXX during business hours (Mon-Fri, 8AM-5PM). Would you like me to create a support ticket for you instead?";
  } else if (lowerCaseMessage.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with today?";
  } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
    return "Thank you for chatting with MSQ IT's virtual assistant. Have a great day!";
  } else {
    return "I'm still learning! For specific assistance, please contact our support team at support@msqit.com.au or call (07) XXXX XXXX. Alternatively, I can create a support ticket for you. Would you like me to do that?";
  }
}
