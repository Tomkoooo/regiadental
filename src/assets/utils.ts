interface Treatment {
    text: string;
    link: string;
  }
  
  interface Doctor {
    name: string;
    id: number;
    position: string
    email: string
    img: string
    role: string
  }

export const kezelesek: Treatment[] = [
    { text: "Diagnosztika, állapotfelmérés", link: "/diagnosztika-allapotfelmeres/" },
    { text: "Professzionális fogtisztitás", link: "/professzionalis-fogtisztitas/" },
    { text: "Fogfehérítés", link: "/fogfeherites/" },
    { text: "Kerámia héjak", link: "/keramia-hejak/" },
    {text: "Direkt héjak", link: '/direkt-hejak/'},
    { text: "Gyökérkezelés", link: "/gyokerkezeles/" },
    { text: "Esztétikus tömés", link: "/esztetikus-tomes/" },
    { text: "Inlay, onlay betét", link: "/inlay-onlay-betet/" },
    { text: "Gyermekfogászat", link: "/gyermekfogaszat/" },
    { text: "Fémkerámia korona", link: "/femkeramia-korona/" },
    {text: "Préskerámia korona", link: "preskeramia-korona"},
    {text: "Cirkon korona", link: "/cirkon-korona"},
    {text: "Hagyományos fogsor", link: "/hagyomanyos-fogsor"},
    {text: "Rugalmas fogsor", link: "/rugalmas-fogsor"},
    {text: "Kombinált fogpótlás", link: "/kombinalt-fogpotlas"},
    {text: "Szájsebészet", link: "/szajsebeszet"},
    {text: "Navigációs implamentálás", link: "/navigacios-implamentalas"},
    {text: "Fixen rögzülő fogsor", link: "/fixen-rogzolu-fogsor"},
    {text: "A-PREF technológia", link: "/a-pref-technologia"},
    {text: "Clearsmile", link: "https://clearsmile.hu"},
    {text: "Paradontológia", link: "/paradontologia"},
    {text: "Lézeres kezelés", link: "/lezeres-kezeles"}
  ];


export const employees: Doctor[] = [
    { id: 1, name: "Dr. Holl Viktória", position: "Fogorvos", role: "doctor", email: "regiadentalkft@gmail.com", img: "image.png" },
    { id: 2, name: "Dr. Forbi Seyed Parsa", position: "Fogorvos", role: "doctor", email: "regiadentalkft@gmail.com", img: "image.png" },
    { id: 3, name: "Dr. Karsai Szabolcs", position: "Fogorvos", role: "doctor", email: "regiadentalkft@gmail.com", img: "image.png" }, // No image
  ];


export const contact = {
    telephely: "Mór, Kórház u. 21, 8060",
    email: "regiadentalkft@gmail.com",
    korzetitel: "+36209245155",
    magantel: "+36202472471"
}