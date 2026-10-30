
const toggle=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
  });
}

const VISHNU_EV_WHATSAPP = '919758896217';

document.querySelectorAll('[data-contact-form]').forEach(form=>{
  form.addEventListener('submit',event=>{
    event.preventDefault();

    if(!form.reportValidity()) return;

    const formData = new FormData(form);
    const lines = [
      'Hello Vishnu EV! I would like to make an enquiry.',
      '',
      'Enquiry details:'
    ];

    for(const [key,value] of formData.entries()){
      const cleanValue = String(value).trim();
      if(cleanValue) lines.push(`${key}: ${cleanValue}`);
    }

    lines.push('', 'Please contact me regarding this enquiry. Thank you!');
    const message = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${VISHNU_EV_WHATSAPP}?text=${message}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    const status = form.querySelector('.form-status');
    if(status){
      status.textContent = 'WhatsApp is opening with your enquiry details. Please press Send in WhatsApp to share it with Vishnu EV.';
    }
  });
});

document.querySelectorAll('[data-year]').forEach(el=>{
  el.textContent = new Date().getFullYear();
});
