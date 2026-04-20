import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default function getFreeDomainsCount(emails) {
  const domains = emails.map(email => email.split('@')[1]);

  const freeDomains = domains.filter(domain => freeEmailDomains.includes(domain));

  const result = {};
  
  freeDomains.forEach(domain => {
    if (result[domain]) {
      result[domain]++;
    } else {
      result[domain] = 1;
    }
  });
  
  return result;
}
// END