// Base URL for the API
const baseUrl = "";

// Your access key (keep this secure in production)
const accessKey = "";

// Function to fetch exchange rates
async function getExchangeRates(baseCurrency, targetCurrencies) {
    try {
        // Build the dynamic URL with query parameters
        const url = `https://api.currencylayer.com/live?access_key=d0bd8fc362ce3478a90ddb4cce257379&source=USD&currencies=INR.,`;
        
        // Fetch data from the API
        const response = await fetch(url);
        const data = await response.json();

        // Check if the API returned an error
        if (!data.success) {
            throw new Error(data.error.info);
        }

        // Log the exchange rates
        console.log(`Exchange rates for ${baseCurrency}:`, data.quotes);
    } catch (error) {
        console.error("Error fetching exchange rates:", error.message);
    }
}

// Example usage
const baseCurrency = "USD"; // The source currency (e.g., USD)
const targetCurrencies = ["INR", "EUR", "GBP"]; // Target currencies (e.g., INR, EUR, GBP)

// Fetch and log the exchange rates
getExchangeRates(baseCurrency, targetCurrencies);
