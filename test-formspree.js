// Test script for Formspree endpoint
// Run this with: node test-formspree.js

const testFormspreeEndpoint = async () => {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_TEST_FORM_ID"; // Replace with your actual endpoint
  
  const testData = {
    name: "Test User",
    contactMethod: "email",
    contactDetails: "test@example.com",
    businessType: "retail",
    adminProblem: "This is a test submission from the BAO Agent landing page",
    formType: "questionnaire"
  };

  try {
    console.log('Testing Formspree endpoint...');
    console.log('Endpoint:', FORMSPREE_ENDPOINT);
    console.log('Test data:', testData);

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(testData),
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Success! Formspree response:', result);
      console.log('📧 Check your email for the test submission');
    } else {
      console.log('❌ Error:', response.statusText);
      const errorText = await response.text();
      console.log('Error details:', errorText);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
};

// Run the test
testFormspreeEndpoint(); 