const WA_NUMBER = '918072574682';

/* Pre-filled message so every chat arrives saying what the visitor wants */
export function waLink(text = "Hi CARZ MOTO, I'd like to know more about your car upgrades.") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* Meta Pixel Lead event, tagged with the CTA it came from */
export function trackLead(source) {
  if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: source });
}
