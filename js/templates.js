// AVRIXXX - Digital Greeting Collection Data Registry
const templatesData = [
  {
    id: "our-little-memories",
    name: "Our Little Memories",
    category: "Kenangan",
    description: "Koleksi kenangan dan momen spesial digital bergaya polaroid, catatan linimasa interaktif, serta musik latar yang hangat.",
    url: "https://scarpbook-gray.vercel.app/",
    image: "assets/images/our_little_memories.png",
    featured: true,
    tags: ["Gaya Scrapbook", "Foto Polaroid", "Linimasa Interaktif", "Musik Latar", "Responsif HP"]
  },
  {
    id: "surprise-doll-box",
    name: "Surprise Doll Box",
    category: "Kejutan",
    description: "Pengalaman kado interaktif yang imut dengan kotak kejutan yang dapat dibuka untuk mengungkap pesan manis dan animasi menggemaskan.",
    url: "https://suprisebox.vercel.app/",
    image: "assets/images/surprise_doll_box.png",
    featured: true,
    tags: ["Unboxing 3D", "Boneka Imut", "Kejutan Pop-Up", "Efek Konfeti", "Interaktif"]
  },
  {
    id: "a-little-birthday-story",
    name: "A Little Birthday Story",
    category: "Ulang Tahun",
    description: "Cerita ulang tahun personal yang dibuat untuk menjadikan hari spesialnya tak terlupakan dengan bab cerita, galeri foto, dan ucapan harapan.",
    url: "https://bluehbd.vercel.app/",
    image: "assets/images/birthday_story.png",
    featured: false,
    tags: ["Buku Cerita Ultah", "Tema Biru Aesthetic", "Kue Interaktif", "Galeri Foto", "Kartu Ucapan"]
  },
  {
    id: "Spider-Man Birthday Surpris",
    name: "Spider-Man Birthday Surpris",
    category: "Ulang Tahun",
    description: "Petualangan ulang tahun romantis sinematik bertema Spider-Man interaktif lengkap dengan alur misi, countdown real-time, timeline komik, galeri memori, kartu superpower, mini-game jaring laba-laba, kado rahasia, dan surat cinta typewriter.",
    url: "https://spiderrav.vercel.app/",
    image: "assets/images/spider.jpeg",
    featured: false,
    tags: [ "Tema Spider-Man Sinematik",
    "Alur Misi Interaktif",
    "Countdown Real-time",
    "Timeline Komik & Vault Memori",]
  },
  {
    id: "toy story",
    name: "toy story",
    category: "Kejutan",
    description: "ebsite kejutan romantis bertema Toy Story dengan suasana kamar Andy, karakter mainan interaktif, petualangan dalam toy box, scene romantis, galeri kenangan, pesan cinta, animasi, dan musik latar.",
    url: "https://toystry-kappa.vercel.app/",
    image: "assets/images/toy.png",
    featured: false,
    tags: ["Tema Toy Story",
    "Andy’s Room",
    "Toy Box Interaktif",
    "Karakter Mainan",
    "Scene Romantis",
    "Galeri Kenangan",
    "Surat Cinta & Musik"]
  },
  {
    id: "Flower",
    name: "Flower",
    category: "Romantis",
    description: "Taman bunga interaktif bertema dongeng peri Thumbelina dengan animasi partikel 3D, galeri kenangan bunga, buket interaktif, mode malam magis, surat cinta, dan musik latar.",
    url: "https://flower-eight-ruddy.vercel.app/",
    image: "assets/images/flower.png",
    featured: false,
    tags: ["Taman Bunga 3D", "Dongeng Thumbelina", "Buket Interaktif", "Mode Malam Sihir", "Surat Cinta & Musik"]
  },
   {
    id: "Flower",
    name: "Flower",
    category: "Romantis",
    description: "Taman bunga interaktif bertema dongeng peri Thumbelina dengan animasi partikel 3D, galeri kenangan bunga, buket interaktif, mode malam magis, surat cinta, dan musik latar.",
    url: "https://flower-eight-ruddy.vercel.app/",
    image: "assets/images/flower.png",
    featured: false,
    tags: ["Taman Bunga 3D", "Dongeng Thumbelina", "Buket Interaktif", "Mode Malam Sihir", "Surat Cinta & Musik"]
  },
  {
    id: "khusus-untuk-kamu",
    name: "Khusus Untuk Kamu",
    category: "Romantis",
    description: "Kejutan digital personal khusus untuk orang spesial dengan visual romantis yang bercahaya dan amplop surat rahasia.",
    url: "https://1-lilac-six-73.vercel.app/",
    image: "assets/images/khusus_untuk_kamu.png",
    featured: true,
    tags: ["Tema Lilac Romantis", "Amplop Rahasia", "Efek Kilau Hati", "Musik Latar", "Personalisasi"]
  },
  {
    id: "hai-sayang",
    name: "Hai Sayang",
    category: "Romantis",
    description: "Hadiah digital romantis yang berisi momen manis pasangan, galeri kenangan, dan catatan cinta rahasia yang dapat disesuaikan.",
    url: "https://littleworld-tan.vercel.app/",
    image: "assets/images/hai_sayang.png",
    featured: false,
    tags: ["Surrat Cinta", "Galeri Foto Pasangan", "Emoji Melayang", "Musik Romantis", "Kejutan Manis"]
  },
  {
    id: "for-my-favorite-person",
    name: "For My Favorite Person",
    category: "Cinta",
    description: "Hadiah cinta digital romantis dengan estetika merah marun mewah, kartu interaktif bentuk hati yang bercahaya, dan musik latar.",
    url: "https://favperson-mu.vercel.app/",
    image: "assets/images/favorite_person.png",
    featured: true,
    tags: ["Tema Merah Mewah", "Animasi Hati", "Musik Latar", "Kartu Cinta Interaktif", "Romantis"]
  },
  {
    id: "the-5-doors",
    name: "The 5 Doors",
    category: "Kejutan",
    description: "Perjalanan romantis interaktif di mana 5 pintu berurutan menyimpan kenangan, pesan rahasia, dan kejutan spesial.",
    url: "https://5door.vercel.app/",
    image: "assets/images/five_doors.png",
    featured: true,
    tags: ["5 Pintu Berurutan", "Tema Gelap Sinematik", "Buka Pintu Interaktif", "Animasi Halus", "Pengalaman Audio"]
  },
  {
    id: "Long Distance Relationship",
    name: "Long Distance Relationship",
    category: "Long Distance Relationship",
    description: "Website ucapan ulang tahun romantis untuk pasangan LDR dengan desain dark-red elegan, animasi lembut, dan konsep hadiah digital interaktif.",
    url: "https://ldrhbd.vercel.app/",
    image: "assets/images/ldr.png",
    featured: true,
    tags: ["Tema Dark Romantic",
      "Ucapan Ulang Tahun LDR",
      "Kartu Hadiah Interaktif",
      "Animasi Hati",
      "Efek Glow Neon",
      "Desain Responsif",]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = templatesData;
}
