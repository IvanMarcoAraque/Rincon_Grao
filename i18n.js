(function(){
  const defaultLang = localStorage.getItem('site_lang') || 'es';
  const translations = {
    es: {
      /* Reservas */
      'reservas.title': 'HACER UNA <span>RESERVA</span>',
      'label.name': 'Nombre del Cliente',
      'label.phone': 'Teléfono de Contacto',
      'label.zone': 'Zona',
      'option.interior': 'Interior 🏠',
      'option.terraza': 'Terraza ☀️',
      'label.day': 'Día',
      'label.time': 'Hora',
      'select.timePlaceholder': 'Selecciona un día primero...',
      'label.people': 'Nº de Personas',
      'btn.confirmReserva': 'Confirmar por WhatsApp 💬',
      'msg.closedSunday': '❌ Los domingos estamos cerrados.',
  'msg.noTables': '⚠️ Lo sentimos, no hay mesas libres en {zona} a esa hora.',
  'msg.reserved': '✅ ¡Reserva guardada! Redirigiendo a WhatsApp...',
      'nav.contact': 'Contacto',
      'nav.reserve': 'RESERVAR AHORA',
      'badge': 'Energía y Sabor',
      'hero.title': 'El pulso gastronómico de <span>Valencia frente al Puerto.</span>',
      'hero.desc': 'Pasión en cada plato, desde nuestros famosos almuerzos hasta los arroces que nos definen.',
      'btn.call': 'Llamar Ahora',
      'btn.menu': 'Ver Carta',
      'section.specials': 'Nuestras <span>Especialidades</span>',
      'card.rices.title': 'Arroces y Paellas',
      'card.rices.desc': 'Elaborados con la pasión y el producto fresco del día.',
      'card.tapas.title': 'Tapas Marineras',
      'card.tapas.desc': 'Los tesoros de nuestro mar servidos con potencia.',
      'card.breakfast.title': 'Almuerzos',
      'card.breakfast.desc': '¡Almuerzos legendarios del Grao para reponer fuerzas!',
      'contact.title': 'Tu mesa te espera en el <span>corazón del puerto.</span>',
      'contact.addr': '📍 C. del Dr. Josep Juan Dómine, 11, 46011 Valencia',
      'contact.hours': '⏰ Lun a Vie: 07:30 – 17:00 | Sáb: 09:00 – 17:00',
      'contact.directions': 'CÓMO LLEGAR',
      'footer.copy': '© 2026 El Rincón Del Grao. Energía y Autenticidad.',
      'floating.phone': '📞',
      // Carta
      'menu.title': 'Carta Completa y Detallada',
      'promo.title': 'MENÚ DEL DÍA - 12€',
      'section.tapas': 'Nuestras Tapas',
      'section.wines': 'Bodega y Bebidas',
      'takeaway.title': 'COMIDA PARA LLEVAR',
      'takeaway.one': '1 Plato:',
      'takeaway.two': '2 Platos:',
      'btn.back': 'VOLVER AL INICIO',
      'btn.reserve': 'RESERVAR AHORA',
      // dishes (names & descriptions)
      'dish.gazpacho.name': 'Gazpacho Andaluz',
      'dish.gazpacho.desc': 'Tomate maduro, pepino, pimiento verde, cebolla blanca, ajo, aceite de oliva virgen extra, vinagre de Jerez, agua y sal. Servido con picatoste.',
      'dish.calabaza.name': 'Pumpkin Cream Soup',
      'dish.calabaza.desc': 'Calabaza asada, zanahoria, puerro y patata con nata ligera y caldo de verduras.',
      'dish.paella.name': 'Secreto Paella',
      'dish.paella.desc': 'Arroz D.O. Valencia con secreto ibérico, setas, ajitos tiernos y azafrán.',
      'dish.berenjena.name': 'Stuffed Aubergine with Tuna',
      'dish.berenjena.desc': 'Berenjena asada rellena de atún en aceite y bechamel gratinada.',
      'dish.tortellini.name': 'Tortellini with Tomato & Cheese',
      'dish.tortellini.desc': 'Pasta rellena con salsa de tomate casera, albahaca y parmesano.',
      'dish.secreto.name': 'Secreto a la Plancha',
      'dish.secreto.desc': 'Secreto ibérico a la parrilla con sal maldon y aceite de romero.',
      'dish.pollo.name': 'Grilled Chicken Breast',
      'dish.pollo.desc': 'Pechuga marinada en limón y ajo, servida con verduras de temporada.',
      'dish.huevos.name': 'Broken Eggs with Chistorra',
      'dish.huevos.desc': 'Patata frita, huevos camperos y chistorra de Navarra.',
      'dish.atun.name': 'Grilled Tuna with Vegetables',
      'dish.atun.desc': 'Lomo de atún marcado sobre pisto valenciano de verduras.',
      'dish.calamares.name': 'Calamari (Roman Style)',
      'dish.calamares.desc': 'Anillas de calamar rebozadas y fritas, servidas con limón.',
      'dish.puntilla.name': 'Fried Baby Squid',
      'dish.puntilla.desc': 'Puntilla de calamar frita y crujiente.',
      'dish.tropero.name': 'Langostino Tropero',
      'dish.tropero.desc': 'Ensaladilla con langostino tigre y pimiento morrón.',
      'dish.bravas.name': 'Patatas Bravas',
      'dish.bravas.desc': 'Patatas con doble fritura, salsa brava y alioli de ajo morado.',
      'dish.queso.name': 'Fried Cheese',
      'dish.queso.desc': 'Dados de queso rebozados y fritos, con mermelada de arándanos.',
      'dish.morro.name': 'Fried Pork Snout',
      'dish.morro.desc': 'Careta de cerdo frita hasta textura crujiente.',
      'dish.cerveza.name': 'Cerveza Ambar',
      'dish.cerveza.desc': 'Cerveza lager especial, 5.2% Vol.',
      'dish.vino.name': 'House Red Wine',
      'dish.vino.desc': 'Vino tinto de la casa (D.O. Utiel-Requena).',
      'dish.refresco.name': 'Soft Drink',
      'dish.refresco.desc': 'Coca-Cola, Fanta, Aquarius o Nestea (330ml).',
      'dish.agua.name': 'Mineral Water',
      'dish.agua.desc': 'Agua mineral natural (500ml).',
      'dish.cafe.name': 'Coffee / Tea',
      'dish.cafe.desc': 'Café natural o selección de tés.',
      'dish.cremaet.name': 'Cremaet',
      'dish.cremaet.desc': 'Café con ron quemado, canela y limón (tradicional valenciano).'
    },
    en: {
      /* Reservas */
      'reservas.title': 'MAKE A <span>RESERVATION</span>',
      'label.name': "Customer's Name",
      'label.phone': 'Contact Phone',
      'label.zone': 'Area',
      'option.interior': 'Indoor 🏠',
      'option.terraza': 'Terrace ☀️',
      'label.day': 'Day',
      'label.time': 'Time',
      'select.timePlaceholder': 'Select a day first...',
      'label.people': 'Number of Guests',
      'btn.confirmReserva': 'Confirm via WhatsApp 💬',
      'msg.closedSunday': '❌ We are closed on Sundays.',
  'msg.noTables': '⚠️ Sorry, there are no tables available in {zona} at that time.',
  'msg.reserved': '✅ Reservation saved! Redirecting to WhatsApp...',
      'nav.contact': 'Contact',
      'nav.reserve': 'RESERVE NOW',
      'badge': 'Energy & Flavor',
      'hero.title': 'The gastronomic pulse of <span>Valencia by the Harbor.</span>',
      'hero.desc': 'Passion in every plate, from our famous breakfasts to the rice dishes that define us.',
      'btn.call': 'Call Now',
      'btn.menu': 'View Menu',
      'section.specials': 'Our <span>Specialties</span>',
      'card.rices.title': 'Rice & Paellas',
      'card.rices.desc': 'Prepared with passion and the freshest products of the day.',
      'card.tapas.title': 'Seafood Tapas',
      'card.tapas.desc': 'Treasures from the sea served with punch.',
      'card.breakfast.title': 'Hearty Breakfasts',
      'card.breakfast.desc': 'Legendary breakfasts from Grao to refuel your day!',
      'contact.title': 'Your table awaits in the <span>heart of the harbor.</span>',
      'contact.addr': '📍 C. del Dr. Josep Juan Dómine, 11, 46011 Valencia',
      'contact.hours': '⏰ Mon–Fri: 07:30 – 17:00 | Sat: 09:00 – 17:00',
      'contact.directions': 'HOW TO GET THERE',
      'footer.copy': '© 2026 El Rincón Del Grao. Energy and Authenticity.',
      'floating.phone': '📞',
      // Carta
      'menu.title': 'Complete & Detailed Menu',
      'promo.title': 'MENU OF THE DAY - €12',
      'section.tapas': 'Our Tapas',
      'section.wines': 'Wine & Drinks',
      'takeaway.title': 'TAKEAWAY FOOD',
      'takeaway.one': '1 Dish:',
      'takeaway.two': '2 Dishes:',
      'btn.back': 'BACK TO HOME',
      'btn.reserve': 'RESERVE NOW',
      // dishes
      'dish.gazpacho.name': 'Andalusian Gazpacho',
      'dish.gazpacho.desc': 'Ripe tomato, cucumber, green pepper, onion, garlic, extra virgin olive oil, sherry vinegar, water and salt. Served with croutons.',
      'dish.calabaza.name': 'Pumpkin Cream Soup',
      'dish.calabaza.desc': 'Roasted pumpkin, carrot, leek and potato with light cream and vegetable stock.',
      'dish.paella.name': 'Paella with Secreto (Iberian Pork)',
      'dish.paella.desc': 'Valencian rice with secreto ibérico, mushrooms, spring garlic, smoked paprika and saffron.',
      'dish.berenjena.name': 'Stuffed Eggplant with Tuna',
      'dish.berenjena.desc': 'Roasted eggplant stuffed with tuna in oil, tomato sofrito and creamy béchamel.',
      'dish.tortellini.name': 'Tortellini Tomato & Cheese',
      'dish.tortellini.desc': 'Filled pasta with homemade tomato sauce, basil and parmesan.',
      'dish.secreto.name': 'Grilled Secreto (Iberian Pork)',
      'dish.secreto.desc': 'Grilled secreto with Maldon salt and rosemary oil.',
      'dish.pollo.name': 'Grilled Chicken Breast',
      'dish.pollo.desc': 'Free-range chicken breast marinated in lemon and garlic, served with seasonal vegetables.',
      'dish.huevos.name': 'Broken Eggs with Chistorra',
      'dish.huevos.desc': 'Fried potatoes, free-range eggs and Navarre chistorra.',
      'dish.atun.name': 'Grilled Tuna with Vegetables',
      'dish.atun.desc': 'Seared tuna loin on a bed of Valencian ratatouille (pisto).',
      'dish.calamares.name': 'Calamari (Roman Style)',
      'dish.calamares.desc': 'Battered squid rings fried and served with lemon.',
      'dish.puntilla.name': 'Fried Baby Squid',
      'dish.puntilla.desc': 'Crispy fried baby squid.',
      'dish.tropero.name': 'Langostino Tropero',
      'dish.tropero.desc': 'Russian salad with tiger prawn and roasted pepper.',
      'dish.bravas.name': 'Patatas Bravas',
      'dish.bravas.desc': 'Double-fried potatoes with spicy brava sauce and garlic aioli.',
      'dish.queso.name': 'Fried Cheese',
      'dish.queso.desc': 'Battered cheese cubes served with blueberry jam.',
      'dish.morro.name': 'Fried Pork Snout',
      'dish.morro.desc': 'Fried pork cheek until glassy-crisp texture.',
      'dish.cerveza.name': 'Ambar Beer',
      'dish.cerveza.desc': 'Special lager beer, 5.2% Vol.',
      'dish.vino.name': 'House Red Wine',
      'dish.vino.desc': 'House red (D.O. Utiel-Requena).',
      'dish.refresco.name': 'Soft Drink',
      'dish.refresco.desc': 'Coca-Cola, Fanta, Aquarius or Nestea (330ml).',
      'dish.agua.name': 'Mineral Water',
      'dish.agua.desc': 'Mineral water (500ml).',
      'dish.cafe.name': 'Coffee / Tea',
      'dish.cafe.desc': 'Natural roast coffee or selection of teas.',
      'dish.cremaet.name': 'Cremaet',
      'dish.cremaet.desc': 'Coffee with flamed rum, cinnamon and lemon (typical Valencian).'
    }
  };

  function translate(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const txt = translations[lang] && translations[lang][key];
      if(txt !== undefined){
        el.innerHTML = txt;
      }
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const txt = translations[lang] && translations[lang][key];
      if(txt !== undefined){
        el.setAttribute('placeholder', txt);
      }
    });
    // update modal if open
    if(window.currentDish){
      updateModalContent(window.currentDish, lang);
    }
    // update inputs/options
    const sel = document.getElementById('langSelect');
    if(sel) sel.value = lang;
    localStorage.setItem('site_lang', lang);
  }

  function updateModalContent(dishKey, lang){
    const titleEl = document.getElementById('modal-title');
    const ingrEl = document.getElementById('modal-ingredients');
    if(!titleEl || !ingrEl) return;
    const nameKey = `dish.${dishKey}.name`;
    const descKey = `dish.${dishKey}.desc`;
    titleEl.textContent = translations[lang][nameKey] || translations['es'][nameKey] || '';
    ingrEl.textContent = translations[lang][descKey] || translations['es'][descKey] || '';
  }

  function showPlato(dishKey){
    window.currentDish = dishKey;
    const lang = localStorage.getItem('site_lang') || defaultLang;
    updateModalContent(dishKey, lang);
    const modal = document.getElementById('myModal');
    if(modal){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
  }

  function closeModal(){
    window.currentDish = null;
    const modal = document.getElementById('myModal');
    if(modal){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
  }

  // expose globally
  window.i18n = { translate, showPlato, closeModal };

  document.addEventListener('DOMContentLoaded', ()=>{
    // attach to controls
    const sel = document.getElementById('langSelect');
    if(sel){
      sel.value = defaultLang;
      sel.addEventListener('change', e => translate(e.target.value));
    }

    // translate current page
    translate(defaultLang);

    // attach modal close handlers
    document.addEventListener('click', (e)=>{
      const modal = document.getElementById('myModal');
      if(!modal) return;
      if(e.target === modal) closeModal();
      if(e.target.matches('.close')) closeModal();
    });

    // replace any inline onclick handlers that call showPlato to use our function
    window.showPlato = showPlato;
    window.closeModal = closeModal;
  });
})();
