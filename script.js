const services = [
    {icon:"B12-A5-Emergency-Hotline/assets/emergency.png", name:"N", desc:"National Emergency", number:"999", smallButton:"A"},
    {icon:"B12-A5-Emergency-Hotline/assets/police.png", name:"P", desc:"Police", number:"999", smallButton:"P"},
    {icon:"B12-A5-Emergency-Hotline/assets/fire-service.png", name:"Fire Service Number", desc:"Fire Service", number:"999", smallButton:"Fire"},
    {icon:"B12-A5-Emergency-Hotline/assets/ambulance.png", name:"A", desc:"Ambulance", number:"1994-999999", smallButton:"H"},
    {icon:"B12-A5-Emergency-Hotline/assets/emergency.png", name:"W", desc:"Women & Child Helpline", number:"109", smallButton:"H"},
    {icon:"B12-A5-Emergency-Hotline/assets/emergency.png", name:"A", desc:"Anti-Corruption", number:"106", smallButton:"G"},
    {icon:"B12-A5-Emergency-Hotline/assets/emergency.png", name:"E", desc:"Electricity Outage", number:"16216", smallButton:"E"},
    {icon:"B12-A5-Emergency-Hotline/assets/emergency.png", name:"B", desc:"Brac", number:"16445", smallButton:"N"},
    {icon:"B12-A5-Emergency-Hotline/assets/emergency.png", name:"B", desc:"Bangladesh Railway", number:"163", smallButton:"T"},
];

const servicesContainer = document.getElementById('services');

function createServiceCard(service){
    const card = document.createElement('div');
    card.className='relative bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col gap-2';

    // ❤️ Heart icon top-right
    const loveBtn = document.createElement('button');
    loveBtn.className = 'absolute top-2 right-2 p-1 rounded transition hover:scale-110';
    loveBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke-width="1.5"
           stroke="currentColor"
           class="w-5 h-5 text-gray-500">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.74 0-3.285 
             1.008-4.062 2.475A4.687 4.687 0 0 0 8.188 
             3.75C5.6 3.75 3.5 5.765 3.5 
             8.25c0 7.22 8.25 11.25 8.25 
             11.25S21 15.47 21 8.25z" />
      </svg>
    `;
    card.appendChild(loveBtn);

    const icon=document.createElement('img');
    icon.src=service.icon;
    icon.alt=service.name;
    icon.className='w-10 h-10 mb-2';
    card.appendChild(icon);

    const name=document.createElement('h3');
    name.className='font-bold text-xl';
    name.textContent=service.name;
    card.appendChild(name);

    const desc=document.createElement('p');
    desc.className='text-gray-600 text-sm';
    desc.textContent=service.desc;
    card.appendChild(desc);

    const number=document.createElement('span');
    number.className='font-mono text-lg sm:text-2xl font-semibold';
    number.textContent=service.number;
    card.appendChild(number);

    if(service.smallButton){
        const smallBtn=document.createElement('button');
        smallBtn.className =
          'bg-gray-200 text-gray-800 text-[10px] px-1.5 py-[1px] rounded-sm leading-tight w-[25px]';
        smallBtn.textContent = service.smallButton;
        card.appendChild(smallBtn);
    }

    const bottomRow=document.createElement('div');
    bottomRow.className='flex w-full mt-2 gap-2 flex-col sm:flex-row';

   const copyBtn=document.createElement('button');
   copyBtn.className='flex items-center justify-center border border-gray-300 text-gray-700 px-3 py-2 text-sm rounded-md flex-1 gap-2';
   copyBtn.innerHTML=`<i class="fa fa-copy"></i><span>Copy</span>`;
   copyBtn.onclick=()=>{navigator.clipboard.writeText(service.number); alert(service.number+" copied!");};

   const callBtn=document.createElement('button');
   callBtn.className='flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm rounded-md flex-1';
   callBtn.innerHTML=`<i class="fa fa-phone"></i> Call`;
   callBtn.onclick=()=>{alert("Calling "+ service.number);};

    bottomRow.appendChild(copyBtn);
    bottomRow.appendChild(callBtn);

    card.appendChild(bottomRow);

    return card;
}

services.forEach(service=>{
    servicesContainer.appendChild(createServiceCard(service));
});

// 🔹 Make layout responsive with Tailwind utilities

// Main container responsive
document.querySelector('main').classList.add(
  'flex-col', 'lg:flex-row', 'gap-6', 'p-6'
);

// Services section responsive
document.getElementById('services').classList.add(
  'grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'gap-6', 'flex-grow'
);

// Sidebar responsive
document.querySelector('aside').classList.add(
  'w-full', 'lg:w-72', 'bg-white', 'rounded', 'shadow', 'p-3', 'flex', 'flex-col', 'gap-3'
);

// Header responsive
document.querySelector('header').classList.add(
  'text-center', 'sm:text-left'
);

// Nav responsive
document.querySelector('nav').classList.add(
  'flex-wrap', 'gap-3'
);

