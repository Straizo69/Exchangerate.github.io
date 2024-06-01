
document.addEventListener('DOMContentLoaded', function() {
    const currencyRatesDiv = document.getElementById('currency-rates');

    const fetchCurrencyRates = async () => {
        try {
            const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
            const data = await response.json();
            displayCurrencyRates(data);
        } catch (error) {
            console.error('Помилка завантаження даних:', error);
        }
    };

    const displayCurrencyRates = (rates) => {
        currencyRatesDiv.innerHTML = '';
        rates.forEach(rate => {
            const currencyDiv = document.createElement('div');
            currencyDiv.className = 'currency';
            currencyDiv.innerHTML = `
                <span>${rate.txt} (${rate.cc})</span>
                <span>${rate.rate.toFixed(4)}</span>
            `;
            currencyRatesDiv.appendChild(currencyDiv);
        });
    };

    fetchCurrencyRates();
});
