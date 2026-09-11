export function normalizePhone(value) {
  if (!/^[+\d\s().-]+$/.test(value)) return null;
  const digits = value.replace(/\D/g, '');
  const national = digits.startsWith('55') && digits.length > 11 ? digits.slice(2) : digits;
  // DDD + telefone fixo (8 dígitos) ou celular (9 dígitos).
  return /^[1-9][0-9](?:[2-5][0-9]{7}|9[0-9]{8})$/.test(national) ? `55${national}` : null;
}

export function createDiagnosisUrl({ name, company, whatsapp, interests }, recipient) {
  const message = [
    'Olá! Gostaria de solicitar um diagnóstico para meu negócio.', '',
    `Nome: ${name.trim()}`, `Empresa: ${company.trim()}`, `WhatsApp: +${whatsapp}`,
    `Frentes de interesse: ${interests.length ? interests.join(', ') : 'Preciso de orientação'}`, '',
    'Solicitação preparada pelo site da Digital Tricks.',
  ].join('\n');
  return `https://wa.me/${recipient.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
