interface Member {
  id: string
  name: string
  position: string
  img: string
  coreteam: boolean
}

export interface Team {
  name: string
  category: string
  members: Member[]
}

export interface Teams {
  year: string
  teams: Team[]
}

const team2022: Team[] = [
  // Management Team
  {
    name: "Management Team",
    category: "Management Team",
    members: [
      {
        name: "Nathampapop Jobsri",
        position: "President",
        id: "LeadTechnical",
        coreteam: true,
        img: "LeadTechnical_Nathampapop_Jobsri",
      },
      {
        name: "Suppakorn Boonprasert",
        position: "Vice President",
        id: "VicePresident",
        coreteam: true,
        img: "VicePresident_Suppakorn_Boonprasert",
      },
      {
        name: "Dechatorn Devaphalin",
        position: "Secretary, ROS Team Member",
        id: "Secretary",
        coreteam: true,
        img: "Secretary_Dechatorn_Devaphalin",
      },
      {
        name: "Nathamon Kongsawat",
        position: "Support Team Leader",
        id: "LeadSupport",
        coreteam: true,
        img: "LeadSupport_Nathamon_Kongsawat",
      },
    ],
  },
  // Technical Team
  // Mechanical Team
  {
    name: "Mechanical Team",
    category: "Technical Team",
    members: [
      {
        name: "Pattharaphol Chainiwattana",
        position: "Mechanical Team Leader",
        id: "Mech01",
        coreteam: true,
        img: "Mech01_Pattharaphol_Chainiwattana",
      },
      {
        name: "Korawish Thanasit",
        position: "Mechanical Team Member",
        id: "Mech02",
        coreteam: true,
        img: "Mech02_Korawish_Thanasit",
      },
      {
        name: "Patitta Ploypray",
        position: "Mechanical Team Member",
        id: "Mech03",
        coreteam: true,
        img: "Mech03_Patitta_Ploypray",
      },
      {
        name: "Theetuch Chinachatchawarat",
        position: "Mechanical Team Member",
        id: "Mech04",
        coreteam: true,
        img: "Mech04_Theetuch_Chinachatchawarat",
      },
      {
        name: "Kittipong Sudjinda",
        position: "Mechanical Team Member",
        id: "Mech05",
        coreteam: true,
        img: "Mech05_Kittipong_Sudjinda",
      },
      {
        name: "Pisit Pongsaran",
        position: "Mechanical Team Member",
        id: "Mech06",
        coreteam: false,
        img: "Mech06_Pisit_Pongsaran",
      },
      {
        name: "Pongphol Suchirapatpong",
        position: "Mechanical Team Member",
        id: "Mech07",
        coreteam: false,
        img: "Mech07_Pongphol_Suchirapatpong",
      },
      {
        name: "Yossathorn Imsaengsuk",
        position: "Mechanical Team Member",
        id: "Mech08",
        coreteam: false,
        img: "Mech08_Yossathorn_Imsaengsuk",
      },
      {
        name: "Nantawat Metakul",
        position: "Mechanical Team Member",
        id: "Mech09",
        coreteam: true,
        img: "Mech09_Nantawat_Metakul",
      },
      {
        name: "Sirawit Jimarkon",
        position: "Mechanical Team Member",
        id: "Mech10",
        coreteam: false,
        img: "Mech10_Sirawit_Jimarkon",
      },
      {
        name: "Nattawat Malainak",
        position: "Mechanical Team Member",
        id: "Mech11",
        coreteam: false,
        img: "Mech11_Nattawat_Malainak",
      },
      {
        name: "Poom Ratsamewesarat",
        position: "Mechanical Team Member",
        id: "Mech12",
        coreteam: true,
        img: "Mech12_Poom_Ratsamewesarat",
      },
      {
        name: "Poom​ Siripin",
        position: "Mechanical Team Member",
        id: "Mech13",
        coreteam: false,
        img: "Mech13_Poom​_Siripin",
      },
      {
        name: "Sirapob Pratipnatsiri",
        position: "Mechanical Team Member",
        id: "Mech14",
        coreteam: true,
        img: "Mech14_Sirapob_Pratipnatsiri",
      },
      {
        name: "Wasin Lapthanaphat",
        position: "Mechanical Team Member",
        id: "Mech15",
        coreteam: true,
        img: "Mech15_Wasin_Lapthanaphat",
      },
    ],
  },
  // Electrical Team
  {
    name: "Electrical Team",
    category: "Technical Team",
    members: [
      {
        name: "Tanakit Suetrong",
        position: "Electrical Team Leader",
        id: "Elec01",
        coreteam: true,
        img: "Elec01_Tanakit_Suetrong",
      },
      {
        name: "Tanapoom Suwan",
        position: "Electrical Team Member",
        id: "Elec02",
        coreteam: false,
        img: "Elec02_Tanapoom_Suwan",
      },
      {
        name: "Suyapoom Chatwatanasiri",
        position: "Electrical Team Member",
        id: "Elec03",
        coreteam: false,
        img: "Elec03_Suyapoom_Chatwatanasiri",
      },
      {
        name: "Chaiyapat Boonyaratsiri",
        position: "Electrical Team Member",
        id: "Elec04",
        coreteam: true,
        img: "Elec04_Chaiyapat_Boonyaratsiri",
      },
      {
        name: "Thanaphat Borsub",
        position: "Electrical Team Member",
        id: "Elec05",
        coreteam: true,
        img: "Elec05_Thanaphat_Borsub",
      },
      {
        name: "Norakamon Panakulchaiwit",
        position: "Electrical Team Member",
        id: "Elec06",
        coreteam: true,
        img: "Elec06_Norakamon_Panakulchaiwit",
      },
      {
        name: "Kasidat Sawatdisan",
        position: "Electrical Team Member",
        id: "Elec07",
        coreteam: false,
        img: "Elec07_Kasidat_Sawatdisan",
      },
      {
        name: "Pakpoom Kaewpradit",
        position: "Electrical Team Member",
        id: "Elec08",
        coreteam: false,
        img: "Elec08_Pakpoom_Kaewpradit",
      },
      {
        name: "Pongpanot Wongsilp",
        position: "Electrical Team Member",
        id: "Elec09",
        coreteam: false,
        img: "Elec09_Pongpanot_Wongsilp",
      },
      {
        name: "Chayada Chanpitayanukunkit",
        position: "Electrical Team Member",
        id: "Elec10",
        coreteam: true,
        img: "Elec10_Chayada_Chanpitayanukunkit",
      },
      {
        name: "Ronakorn Saetang",
        position: "Electrical Team Member",
        id: "Elec11",
        coreteam: true,
        img: "Elec11_Ronakorn_Saetang",
      },
    ],
  },
  // ROS Team
  {
    name: "ROS Team",
    category: "Technical Team",
    members: [
      {
        name: "Chayavich Asavakanoksilp",
        position: "ROS Team Leader",
        id: "ROS01",
        coreteam: true,
        img: "ROS01_Chayavich_Asavakanoksilp",
      },
      {
        name: "Piyounggul Suparsorn",
        position: "ROS Team Member",
        id: "ROS02",
        coreteam: false,
        img: "ROS02_Piyounggul_Suparsorn",
      },
      {
        name: "Kanisorn Ananwattanawit",
        position: "ROS Team Member",
        id: "ROS03",
        coreteam: false,
        img: "ROS03_Kanisorn_Ananwattanawit",
      },
      {
        name: "Bhammanas Praesangeim",
        position: "ROS Team Member",
        id: "ROS04",
        coreteam: true,
        img: "ROS04_Bhammanas_Praesangeim",
      },
      {
        name: "Yada Suksawasdi",
        position: "ROS Team Member",
        id: "ROS05",
        coreteam: false,
        img: "ROS05_Yada_Suksawasdi",
      },
      {
        name: "Pitchayut Lertniratwong",
        position: "ROS Team Member",
        id: "ROS06",
        coreteam: false,
        img: "ROS06_Pitchayut_Lertniratwong",
      },
      {
        name: "Kanin Sukittivarapunt",
        position: "ROS Team Member",
        id: "ROS07",
        coreteam: false,
        img: "ROS07_Kanin_Sukittivarapunt",
      },
    ],
  },
  // CV Team
  {
    name: "CV Team",
    category: "Technical Team",
    members: [
      {
        name: "Thanakorn Sappakit",
        position: "CV Team Leader",
        id: "CV01",
        coreteam: true,
        img: "CV01_Thanakorn_Sappakit",
      },
      {
        name: "Pattadon Naksuwan",
        position: "CV Team Member",
        id: "CV02",
        coreteam: false,
        img: "CV02_Pattadon_Naksuwan",
      },
      {
        name: "Thrapoom Sakulpiyawong",
        position: "CV Team Member",
        id: "CV03",
        coreteam: true,
        img: "CV03_Thrapoom_Sakulpiyawong",
      },
      {
        name: "Kridbhume Chammanard",
        position: "CV Team Member",
        id: "CV04",
        coreteam: true,
        img: "CV04_Kridbhume_Chammanard",
      },
      {
        name: "Tibet Buramarn",
        position: "CV Team Member",
        id: "CV05",
        coreteam: true,
        img: "CV05_Tibet_Buramarn",
      },
      {
        name: "Nattadon Tangsasom",
        position: "CV Team Member",
        id: "CV06",
        coreteam: false,
        img: "CV06_Nattadon_Tangsasom",
      },
      {
        name: "Rossukhon Rukkiattikhun",
        position: "CV Team Member",
        id: "CV07",
        coreteam: false,
        img: "CV07_Rossukhon_Rukkiattikhun",
      },
      {
        name: "Ting-yi Lin",
        position: "CV Team Member",
        id: "CV08",
        coreteam: true,
        img: "CV08_Ting-yi_Lin",
      },
      {
        name: "Trivit Chaiyaraks Worakulpisut",
        position: "CV Team Member",
        id: "CV09",
        coreteam: false,
        img: "CV09_Trivit_Chaiyaraks_Worakulpisut",
      },
      {
        name: "Purich Siritip",
        position: "CV Team Member",
        id: "CV10",
        coreteam: true,
        img: "CV10_Purich_Siritip",
      },
      {
        name: "Panithi Makthiengtrong",
        position: "CV Team Member",
        id: "CV11",
        coreteam: true,
        img: "CV11_Panithi_Makthiengtrong",
      },
      {
        name: "Patteera Lerdtada",
        position: "CV Team Member",
        id: "CV12",
        coreteam: false,
        img: "CV12_Patteera_Lerdtada",
      },
      {
        name: "Wongpakorn Chokthitirqth",
        position: "CV Team Member",
        id: "CV13",
        coreteam: false,
        img: "CV13_Wongpakorn_Chokthitirqth",
      },
    ],
  },
  // NLP Team
  {
    name: "NLP Team",
    category: "Technical Team",
    members: [
      {
        name: "Tinapat Limsila",
        position: "NLP Team Leader",
        id: "NLP01",
        coreteam: true,
        img: "NLP01_Tinapat_Limsila",
      },
      {
        name: "Pattaradanai Lakkananithiphan",
        position: "NLP Team Member",
        id: "NLP02",
        coreteam: true,
        img: "NLP02_Pattaradanai_Lakkananithiphan",
      },
      {
        name: "Nunnapat Anupongongarch",
        position: "NLP Team Member",
        id: "NLP03",
        coreteam: true,
        img: "NLP03_Nunnapat_Anupongongarch",
      },
      {
        name: "Suppakit Laomahamek",
        position: "NLP Team Member",
        id: "NLP04",
        coreteam: true,
        img: "NLP04_Suppakit_Laomahamek",
      },
      {
        name: "Chanisda von der Luehe",
        position: "NLP Team Member",
        id: "NLP05",
        coreteam: true,
        img: "NLP05_Chanisda_von_der_Luehe",
      },
      {
        name: "Gritaya Suktavornprasit",
        position: "NLP Team Member",
        id: "NLP06",
        coreteam: true,
        img: "NLP06_Gritaya_Suktavornprasit",
      },
      {
        name: "Thachapan Sermsrisuwan",
        position: "NLP Team Member",
        id: "NLP07",
        coreteam: true,
        img: "NLP07_Thachapan_Sermsrisuwan",
      },
    ],
  },
  // Support Teeam
  // PR Team
  {
    name: "PR Team",
    category: "Support Team",
    members: [
      {
        name: "Thanasit Pakkaananchai",
        position: "PR Team Leader",
        id: "PR01",
        coreteam: true,
        img: "PR01_Thanasit_Pakkaananchai",
      },
      {
        name: "Krittapat Onthuam",
        position: "PR Team Member",
        id: "PR02",
        coreteam: true,
        img: "PR02_Krittapat_Onthuam",
      },
      {
        name: "Wisuwat Kalimpan",
        position: "PR Team Member",
        id: "PR03",
        coreteam: true,
        img: "PR03_Wisuwat_Kalimpan",
      },
      {
        name: "Rika Habu",
        position: "PR Team Member",
        id: "PR04",
        coreteam: false,
        img: "PR04_Rika_Habu",
      },
      {
        name: "Darika Kulrattanarak",
        position: "PR Team Member",
        id: "PR05",
        coreteam: false,
        img: "PR05_Darika_Kulrattanarak",
      },
      {
        name: "Naravadee Kongviriyavithaya",
        position: "PR Team Member",
        id: "PR06",
        coreteam: true,
        img: "PR06_Naravadee_Kongviriyavithaya",
      },
      {
        name: "Natcha Hungsapruek",
        position: "PR Team Member",
        id: "PR07",
        coreteam: true,
        img: "PR07_Natcha_Hungsapruek",
      },
      {
        name: "Punnaporn Tragoonsubtavee",
        position: "PR Team Member",
        id: "PR08",
        coreteam: false,
        img: "PR08_Punnaporn_Tragoonsubtavee",
      },
    ],
  },
  // Sponsor Team
  {
    name: "Sponsor Team",
    category: "Support Team",
    members: [
      {
        name: "Bongkotmart Tiemmuang",
        position: "Sponsor Team Leader",
        id: "Spon01",
        coreteam: true,
        img: "Spon01_Bongkotmart_Tiemmuang",
      },
      {
        name: "Naerunchara Prathumsuwan",
        position: "Sponsor Team Member",
        id: "Spon02",
        coreteam: true,
        img: "Spon02_Naerunchara_Prathumsuwan",
      },
      {
        name: "Chayapon  Arpayatam",
        position: "Sponsor Team Member",
        id: "Spon03",
        coreteam: true,
        img: "Spon03_Chayapon_Arpayatam",
      },
      {
        name: "Thanawan Ninlawan",
        position: "Sponsor Team Member",
        id: "Spon04",
        coreteam: true,
        img: "Spon04_Thanawan_Ninlawan",
      },
    ],
  },
  // Finance Team
  {
    name: "Finance Team",
    category: "Support Team",
    members: [
      {
        name: "Tunyaluck Liengkorsakul",
        position: "Finance Team Member",
        id: "Finance01",
        coreteam: true,
        img: "Finance01_Tunyaluck_Liengkorsakul",
      },
      {
        name: "Thitaya Divari",
        position: "Finance Team Member",
        id: "Finance02",
        coreteam: true,
        img: "Finance02_Thitaya_Divari",
      },
    ],
  },
  // Web Developer
  // None

  // Advisor
  {
    name: "Advisor",
    category: "Advisor",
    members: [
      {
        name: "Ronnapee Chaichaowarat, Ph.D.",
        position: "Mechanical Advisor",
        id: "Advisor01",
        coreteam: true,
        img: "Advisor01_Ronnapee_Chaichaowarat",
      },
      {
        name: "Asst. Prof. Manop Wongsaisuwan",
        position: "Electrical Advisor",
        id: "Advisor02",
        coreteam: false,
        img: "Advisor02_Manop_Wongsaisuwan",
      },
    ],
  },
]

const teams: Teams[] = [
  {
    year: "2022",
    teams: team2022,
  },
]

export default teams
