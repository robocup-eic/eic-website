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
        name: "Pakorn Boonpetch",
        position: "Mchanical Team Leader",
        id: "Lead01",
        coreteam: true,
        img: "2022/833478_70bf9474c2f14faca1395accb740367b~mv2",
      },
      {
        name: "Thanachot Sappakit",
        position: "ROS and AI Team Leader",
        id: "Lead02",
        coreteam: true,
        img: "2022/833478_2e835cc71bf64eb8bc28b5c30827d764~mv2",
      },
      {
        name: "Sakunthan Sunhem",
        position: "Electrical Team Leader",
        id: "Lead03",
        coreteam: true,
        img: "2022/833478_6adb30fd4ff1408b98ee340700e4af07~mv2",
      },
    ],
  },
  // ROS Team
  {
    name: "ROS Team",
    category: "ROS Team",
    members: [
      {
        name: "Sorawit Thipsingh",
        position: "ROS Team",
        id: "Ros01",
        coreteam: true,
        img: "2022/833478_b2d0b5e4dc6d44e685d1c15bccad81dd~mv2",
      },
      {
        name: "Krittapat Onthuam",
        position: "ROS Team",
        id: "Ros02",
        coreteam: true,
        img: "2022/833478_1e4356ae073445e3b1e9392b5f75f74a~mv2",
      },
      {
        name: "Pirat Pothavorn",
        position: "ROS Team",
        id: "Ros03",
        coreteam: true,
        img: "2022/833478_088bf9d5c7574a31a81177343c15dc7d~mv2",
      },
      {
        name: "Chayavich Asavakanoksilp",
        position: "ROS Team",
        id: "Ros04",
        coreteam: true,
        img: "2022/833478_b6c3e7d05daf441aa766b0559372367b~mv2",
      },
      {
        name: "Jessadakorn Wongsawangsiri",
        position: "ROS Team",
        id: "Ros05",
        coreteam: true,
        img: "2022/833478_4345479c96434fc2af7aebca6ce28392~mv2",
      },
      {
        name: "Pollapat Jiamprasert",
        position: "ROS Team",
        id: "Ros06",
        coreteam: true,
        img: "2022/833478_261dbedc01444e42adbff41a1b3bac50~mv2",
      },
    ],
  },
  // NLP Team
  {
    name: "NLP Team ",
    category: "NLPTeam",
    members: [
      {
        name: "Pannavich Setawanna",
        position: "NLP Team Leader",
        id: "Nlp01",
        coreteam: true,
        img: "2022/833478_7529736bf8d04c7db9c247396ac22267~mv2",
      },
      {
        name: "Kongpop Panya",
        position: "NLP Team",
        id: "Nlp02",
        coreteam: true,
        img: "2022/833478_5d7e7ec04ed1453fa1903ae05c84fdb1~mv2",
      },
      {
        name: "Khunanon Rattanagoses",
        position: "NLP Team",
        id: "Nlp03",
        coreteam: true,
        img: "2022/833478_5531a1270346461f8564e22ef902d122~mv2",
      },
      {
        name: "Boonthicha Saejia",
        position: "NLP Team",
        id: "Nlp04",
        coreteam: true,
        img: "2022/833478_984e3c29c821416d866c1255f579c208~mv2",
      },
      {
        name: "Oranich Jamkachornkiat",
        position: "NLP Team",
        id: "Nlp05",
        coreteam: true,
        img: "2022/833478_17656ff7638e4faea71831184da1b7d4~mv2",
      },
    ],
  },
  // Mechanical Team
  {
    name: "Mechanical Team",
    category: "Mechanical Team",
    members: [
      {
        name: "Punnathone Songjakkaew",
        position: "Co-leader, Mobile-base and Body Team",
        id: "Mech01",
        coreteam: true,
        img: "2022/833478_83acf3ac7f1645d79e5d6a7cc4f60bb9~mv2",
      },
      {
        name: "Kasidit Srisuntisuk",
        position: "Co-leader, Robotic Arm Team",
        id: "Mech02",
        coreteam: true,
        img: "2022/833478_0b1709fc9bbb45f49786904a924768b8~mv2",
      },
      {
        name: "Kittipob Verawatthana",
        position: "Co-leader, Robotic head and Manufacturing Team",
        id: "Mech03",
        coreteam: true,
        img: "2022/833478_083d6be9e56a48fe9f517795827a8139~mv2",
      },
      {
        name: "Thitiwan Krachangnam",
        position: "Financial Manager, Robotic arm Team",
        id: "Mech04",
        coreteam: true,
        img: "2022/833478_1de659c7cc6b43e48193e59049a15b65~mv2",
      },
      {
        name: "Kasidit Suwannagarn",
        position: "Robotic Arm Team",
        id: "Mech05",
        coreteam: true,
        img: "2022/833478_771a12d121784de48fb7ad07a5086491~mv2",
      },
      {
        name: "Rada Chuengpichanwanich",
        position: "Mobile-base and Body Team",
        id: "Mech06",
        coreteam: true,
        img: "2022/833478_8b979c408fd04a06bde022c87708ffb8~mv2",
      },
      {
        name: "Panick Pitchdumrong",
        position: "Mobile-base and Body Team",
        id: "Mech07",
        coreteam: true,
        img: "2022/833478_a0e82f6b668949fba3b39ab37d0182ec~mv2",
      },
      {
        name: "Pattharaphol Chainiwattana",
        position: "Robotic head and Manufacturing Team",
        id: "Mech08",
        coreteam: true,
        img: "2022/833478_a0cc85554e774b0bb23465eac275702d~mv2",
      },
      {
        name: "Korawish Thanasit",
        position: "Robotic head and Manufacturing Team",
        id: "Mech09",
        coreteam: true,
        img: "2022/833478_b41d972c1ba040c4b583da9c74bd0be4~mv2",
      },
      {
        name: "Wiphop Konghkudang",
        position: "Robotic head and Manufacturing Team",
        id: "Mech10",
        coreteam: true,
        img: "2022/833478_5caa90cd626244dba79e79f175d78431~mv2",
      },
    ],
  },
  // Electrical Team
  {
    name: "Eletrical Team",
    category: "Eletrical Team",
    members: [
      {
        name: "Thanida Prasertchai",
        position: "Electrical Team",
        id: "Elec01",
        coreteam: true,
        img: "2022/833478_f4d7c4eb6d4e4004bd51be72811a78dc~mv2",
      },
      {
        name: "Nutchanon Jariyanurut",
        position: "Electrical Team",
        id: "Elec02",
        coreteam: true,
        img: "2022/833478_5bc5018eb0e84559a370e393ab68175a~mv2",
      },
      {
        name: "Supawit Lertnaisat",
        position: "Electrical Team",
        id: "Elec03",
        coreteam: true,
        img: "2022/833478_d547d5c256e74dbbb22b902468f4015d~mv2",
      },
      {
        name: "Suppakorn Boonprasert",
        position: "Electrical Team",
        id: "Elec04",
        coreteam: true,
        img: "2022/833478_b9023dff938e40e3aabfb77da58d2bda~mv2",
      },
    ],
  },
  // Computer Vision Team
  {
    name: "Computer Vision Team",
    category: "Computer Vision Team",
    members: [
      {
        name: "Sukit Sukittanon",
        position: "Co-leader, Computer Vision Team",
        id: "Cv01",
        coreteam: true,
        img: "2022/833478_1a23acc83e1844abbc08f6811b77b6b2~mv2",
      },
      {
        name: "Pannaton Kerdkaewfah",
        position: "Computer Vision Team",
        id: "Cv02",
        coreteam: true,
        img: "2022/833478_42e6a2c254bc487e87b8504da43dabf1~mv2",
      },
      {
        name: "Supawich Sitdhipol",
        position: "Computer Vision Team",
        id: "Cv03",
        coreteam: true,
        img: "2022/833478_89933073814742c59f9a34801f58ad29~mv2",
      },
      {
        name: "Napat Cheetanom",
        position: "Computer Vision Team",
        id: "Cv04",
        coreteam: true,
        img: "2022/833478_a7c5026bc2284fc89c3e807f48a9b861~mv2",
      },
      {
        name: "Thanakorn Sappakit",
        position: "Computer Vision Team",
        id: "Cv05",
        coreteam: true,
        img: "2022/833478_6048cfd187ce4e96b82879de47fe98c0~mv2",
      },
      {
        name: "Pon-ek Tangmunchittham",
        position: "Computer Vision Team",
        id: "Cv06",
        coreteam: true,
        img: "2022/833478_3f8edd2145624dd68609c20ce0be58b1~mv2",
      },
      {
        name: "Rattanapong Wongcharoensin",
        position: "Computer Vision Team",
        id: "Cv07",
        coreteam: true,
        img: "2022/833478_516a297947c249a594c57ca81de88586~mv2",
      },
    ],
  },
  // Fundrasising Team
  {
    name: "Fundrasising Team",
    category: "Fundrasising Team",
    members: [
      {
        name: "Unna Talomsin",
        position: "Fundrasising Team",
        id: "Fund01",
        coreteam: true,
        img: "2022/833478_18fd041668d14efc824e40f7b5276bf7~mv2",
      },
      {
        name: "Phurinut Choksettakig",
        position: "Fundrasising Team",
        id: "Fund02",
        coreteam: true,
        img: "2022/833478_06f5e2c852fa41ff871756bddc3ae5f9~mv2",
      },
      {
        name: "Chayada Suttitossatham",
        position: "Fundrasising Team",
        id: "Fund03",
        coreteam: true,
        img: "2022/833478_c53e0336722d46199a3ab39b3c3c403f~mv2",
      },
      {
        name: "Thanawich Wongniyomkaset",
        position: "Fundrasising Team",
        id: "Fund04",
        coreteam: true,
        img: "2022/833478_bd18b286094f4ac0b31c7beec6ae80e7~mv2",
      },
      {
        name: "Peerakrit Phacharaboonyakiat",
        position: "Fundrasising Team",
        id: "Fund05",
        coreteam: true,
        img: "2022/833478_8c4e3d1338644626816a2bd535b5effd~mv2",
      },
    ],
  },
  // Adviser Team
  {
    name: "Adviser",
    category: "Adviser",
    members: [
      {
        name: "Asst. Prof. Nattee Niparnan, Ph.D.",
        position: "Adviser",
        id: "Advise01",
        coreteam: true,
        img: "2022/833478_8cd3375ff36145da8890daca936ac524~mv2",
      },
      {
        name: "Asst. Prof. Manop Wongsaisuwan",
        position: "Adviser",
        id: "Advise02",
        coreteam: true,
        img: "2022/833478_8f0551e2386c434b9d0f4c056edead75~mv2",
      },
      {
        name: "Ronnapee Chaichaowarat, Ph.D.",
        position: "Adviser",
        id: "Advise03",
        coreteam: true,
        img: "2022/833478_75b855deae614577a16691aebeff1ed9~mv2",
      },
      {
        name: "Karu Chongsiripinyo,Ph.D.",
        position: "Adviser",
        id: "Advise04",
        coreteam: true,
        img: "2022/833478_2777fd7cdb4647f99fc448d6e51604f9~mv2",
      },
      {
        name: "Asst. Prof. Witaya Wannasuphoprasit",
        position: "Adviser",
        id: "Advise05",
        coreteam: true,
        img: "2022/833478_2a58a59c80af475b949a89b9f508b843~mv2",
      },
    ],
  },
]

const team2023: Team[] = [
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
        img: "2023/LeadTechnical_Nathampapop_Jobsri",
      },
      {
        name: "Suppakorn Boonprasert",
        position: "Vice President",
        id: "VicePresident",
        coreteam: true,
        img: "2023/VicePresident_Suppakorn_Boonprasert",
      },
      {
        name: "Tinapat Limsila",
        position: "Vice President and NLP Team Leader",
        id: "VicePresident2",
        coreteam: true,
        img: "2023/NLP01_Tinapat_Limsila",
      },
      {
        name: "Dechatorn Devaphalin",
        position: "Secretary",
        id: "Secretary",
        coreteam: true,
        img: "2023/Secretary_Dechatorn_Devaphalin",
      },
      {
        name: "Nathamon Kongsawat",
        position: "Support Team Leader",
        id: "LeadSupport",
        coreteam: true,
        img: "2023/LeadSupport_Nathamon_Kongsawat",
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
        img: "2023/Mech01_Pattharaphol_Chainiwattana",
      },
      {
        name: "Korawish Thanasit",
        position: "Mechanical Team Member",
        id: "Mech02",
        coreteam: true,
        img: "2023/Mech02_Korawish_Thanasit",
      },
      {
        name: "Patitta Ploypray",
        position: "Mechanical Team Member",
        id: "Mech03",
        coreteam: true,
        img: "2023/Mech03_Patitta_Ploypray",
      },
      {
        name: "Theetuch Chinachatchawarat",
        position: "Mechanical Team Member",
        id: "Mech04",
        coreteam: true,
        img: "2023/Mech04_Theetuch_Chinachatchawarat",
      },
      {
        name: "Kittipong Sudjinda",
        position: "Mechanical Team Member",
        id: "Mech05",
        coreteam: true,
        img: "2023/Mech05_Kittipong_Sudjinda",
      },
      {
        name: "Pisit Pongsaran",
        position: "Mechanical Team Member",
        id: "Mech06",
        coreteam: false,
        img: "2023/Mech06_Pisit_Pongsaran",
      },
      {
        name: "Pongphol Suchirapatpong",
        position: "Mechanical Team Member",
        id: "Mech07",
        coreteam: false,
        img: "2023/Mech07_Pongphol_Suchirapatpong",
      },
      {
        name: "Yossathorn Imsaengsuk",
        position: "Mechanical Team Member",
        id: "Mech08",
        coreteam: false,
        img: "2023/Mech08_Yossathorn_Imsaengsuk",
      },
      {
        name: "Nantawat Metakul",
        position: "Mechanical Team Member",
        id: "Mech09",
        coreteam: true,
        img: "2023/Mech09_Nantawat_Metakul",
      },
      {
        name: "Sirawit Jimarkon",
        position: "Mechanical Team Member",
        id: "Mech10",
        coreteam: false,
        img: "2023/Mech10_Sirawit_Jimarkon",
      },
      {
        name: "Nattawat Malainak",
        position: "Mechanical Team Member",
        id: "Mech11",
        coreteam: false,
        img: "2023/Mech11_Nattawat_Malainak",
      },
      {
        name: "Poom Ratsamewesarat",
        position: "Mechanical Team Member",
        id: "Mech12",
        coreteam: true,
        img: "2023/Mech12_Poom_Ratsamewesarat",
      },
      {
        name: "Poom​ Siripin",
        position: "Mechanical Team Member",
        id: "Mech13",
        coreteam: false,
        img: "2023/Mech13_Poom​_Siripin",
      },
      {
        name: "Sirapob Pratipnatsiri",
        position: "Mechanical Team Member",
        id: "Mech14",
        coreteam: true,
        img: "2023/Mech14_Sirapob_Pratipnatsiri",
      },
      {
        name: "Wasin Lapthanaphat",
        position: "Mechanical Team Member",
        id: "Mech15",
        coreteam: true,
        img: "2023/Mech15_Wasin_Lapthanaphat",
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
        img: "2023/Elec01_Tanakit_Suetrong",
      },
      {
        name: "Tanapoom Suwan",
        position: "Electrical Team Member",
        id: "Elec02",
        coreteam: false,
        img: "2023/Elec02_Tanapoom_Suwan",
      },
      {
        name: "Suyapoom Chatwatanasiri",
        position: "Electrical Team Member",
        id: "Elec03",
        coreteam: false,
        img: "2023/Elec03_Suyapoom_Chatwatanasiri",
      },
      {
        name: "Chaiyapat Boonyaratsiri",
        position: "Electrical Team Member",
        id: "Elec04",
        coreteam: true,
        img: "2023/Elec04_Chaiyapat_Boonyaratsiri",
      },
      {
        name: "Thanaphat Borsub",
        position: "Electrical Team Member",
        id: "Elec05",
        coreteam: true,
        img: "2023/Elec05_Thanaphat_Borsub",
      },
      {
        name: "Norakamon Panakulchaiwit",
        position: "Electrical Team Member",
        id: "Elec06",
        coreteam: true,
        img: "2023/Elec06_Norakamon_Panakulchaiwit",
      },
      {
        name: "Kasidat Sawatdisan",
        position: "Electrical Team Member",
        id: "Elec07",
        coreteam: false,
        img: "2023/Elec07_Kasidat_Sawatdisan",
      },
      {
        name: "Pakpoom Kaewpradit",
        position: "Electrical Team Member",
        id: "Elec08",
        coreteam: false,
        img: "2023/Elec08_Pakpoom_Kaewpradit",
      },
      {
        name: "Pongpanot Wongsilp",
        position: "Electrical Team Member",
        id: "Elec09",
        coreteam: false,
        img: "2023/Elec09_Pongpanot_Wongsilp",
      },
      {
        name: "Chayada Chanpitayanukunkit",
        position: "Electrical Team Member",
        id: "Elec10",
        coreteam: true,
        img: "2023/Elec10_Chayada_Chanpitayanukunkit",
      },
      {
        name: "Ronakorn Saetang",
        position: "Electrical Team Member",
        id: "Elec11",
        coreteam: true,
        img: "2023/Elec11_Ronakorn_Saetang",
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
        img: "2023/ROS01_Chayavich_Asavakanoksilp",
      },
      {
        name: "Piyounggul Suparsorn",
        position: "ROS Team Member",
        id: "ROS02",
        coreteam: false,
        img: "2023/ROS02_Piyounggul_Suparsorn",
      },
      {
        name: "Kanisorn Ananwattanawit",
        position: "ROS Team Member",
        id: "ROS03",
        coreteam: false,
        img: "2023/ROS03_Kanisorn_Ananwattanawit",
      },
      {
        name: "Bhammanas Praesangeim",
        position: "ROS Team Member",
        id: "ROS04",
        coreteam: true,
        img: "2023/ROS04_Bhammanas_Praesangeim",
      },
      {
        name: "Yada Suksawasdi",
        position: "ROS Team Member",
        id: "ROS05",
        coreteam: false,
        img: "2023/ROS05_Yada_Suksawasdi",
      },
      {
        name: "Pitchayut Lertniratwong",
        position: "ROS Team Member",
        id: "ROS06",
        coreteam: false,
        img: "2023/ROS06_Pitchayut_Lertniratwong",
      },
      {
        name: "Kanin Sukittivarapunt",
        position: "ROS Team Member",
        id: "ROS07",
        coreteam: false,
        img: "2023/ROS07_Kanin_Sukittivarapunt",
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
        img: "2023/CV01_Thanakorn_Sappakit",
      },
      {
        name: "Pattadon Naksuwan",
        position: "CV Team Member",
        id: "CV02",
        coreteam: false,
        img: "2023/CV02_Pattadon_Naksuwan",
      },
      {
        name: "Thrapoom Sakulpiyawong",
        position: "CV Team Member",
        id: "CV03",
        coreteam: true,
        img: "2023/CV03_Thrapoom_Sakulpiyawong",
      },
      {
        name: "Kridbhume Chammanard",
        position: "CV Team Member",
        id: "CV04",
        coreteam: true,
        img: "2023/CV04_Kridbhume_Chammanard",
      },
      {
        name: "Tibet Buramarn",
        position: "CV Team Member",
        id: "CV05",
        coreteam: true,
        img: "2023/CV05_Tibet_Buramarn",
      },
      {
        name: "Nattadon Tangsasom",
        position: "CV Team Member",
        id: "CV06",
        coreteam: false,
        img: "2023/CV06_Nattadon_Tangsasom",
      },
      {
        name: "Rossukhon Rukkiattikhun",
        position: "CV Team Member",
        id: "CV07",
        coreteam: false,
        img: "2023/CV07_Rossukhon_Rukkiattikhun",
      },
      {
        name: "Ting-yi Lin",
        position: "CV Team Member",
        id: "CV08",
        coreteam: true,
        img: "2023/CV08_Ting-yi_Lin",
      },
      {
        name: "Trivit Chaiyaraks Worakulpisut",
        position: "CV Team Member",
        id: "CV09",
        coreteam: false,
        img: "2023/CV09_Trivit_Chaiyaraks_Worakulpisut",
      },
      {
        name: "Purich Siritip",
        position: "CV Team Member",
        id: "CV10",
        coreteam: true,
        img: "2023/CV10_Purich_Siritip",
      },
      {
        name: "Patteera Lerdtada",
        position: "CV Team Member",
        id: "CV12",
        coreteam: false,
        img: "2023/CV12_Patteera_Lerdtada",
      },
      {
        name: "Wongpakorn Chokthitirqth",
        position: "CV Team Member",
        id: "CV13",
        coreteam: false,
        img: "2023/CV13_Wongpakorn_Chokthitirqth",
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
        position: "Vice President and NLP Team Leader",
        id: "NLP01",
        coreteam: true,
        img: "2023/NLP01_Tinapat_Limsila",
      },
      {
        name: "Pattaradanai Lakkananithiphan",
        position: "NLP Team Member",
        id: "NLP02",
        coreteam: true,
        img: "2023/NLP02_Pattaradanai_Lakkananithiphan",
      },
      {
        name: "Nunnapat Anupongongarch",
        position: "NLP Team Member",
        id: "NLP03",
        coreteam: true,
        img: "2023/NLP03_Nunnapat_Anupongongarch",
      },
      {
        name: "Suppakit Laomahamek",
        position: "NLP Team Member",
        id: "NLP04",
        coreteam: true,
        img: "2023/NLP04_Suppakit_Laomahamek",
      },
      {
        name: "Chanisda von der Luehe",
        position: "NLP Team Member",
        id: "NLP05",
        coreteam: true,
        img: "2023/NLP05_Chanisda_von_der_Luehe",
      },
      {
        name: "Gritaya Suktavornprasit",
        position: "NLP Team Member",
        id: "NLP06",
        coreteam: true,
        img: "2023/NLP06_Gritaya_Suktavornprasit",
      },
      {
        name: "Thachapan Sermsrisuwan",
        position: "NLP Team Member",
        id: "NLP07",
        coreteam: true,
        img: "2023/NLP07_Thachapan_Sermsrisuwan",
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
        img: "2023/PR01_Thanasit_Pakkaananchai",
      },
      {
        name: "Krittapat Onthuam",
        position: "PR Team Member",
        id: "PR02",
        coreteam: true,
        img: "2023/PR02_Krittapat_Onthuam",
      },
      {
        name: "Wisuwat Kalimpan",
        position: "PR Team Member",
        id: "PR03",
        coreteam: true,
        img: "2023/PR03_Wisuwat_Kalimpan",
      },
      {
        name: "Rika Habu",
        position: "PR Team Member",
        id: "PR04",
        coreteam: false,
        img: "2023/PR04_Rika_Habu",
      },
      {
        name: "Darika Kulrattanarak",
        position: "PR Team Member",
        id: "PR05",
        coreteam: false,
        img: "2023/PR05_Darika_Kulrattanarak",
      },
      {
        name: "Naravadee Kongviriyavithaya",
        position: "PR Team Member",
        id: "PR06",
        coreteam: true,
        img: "2023/PR06_Naravadee_Kongviriyavithaya",
      },
      {
        name: "Natcha Hungsapruek",
        position: "PR Team Member",
        id: "PR07",
        coreteam: true,
        img: "2023/PR07_Natcha_Hungsapruek",
      },
      {
        name: "Punnaporn Tragoonsubtavee",
        position: "PR Team Member",
        id: "PR08",
        coreteam: false,
        img: "2023/PR08_Punnaporn_Tragoonsubtavee",
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
        img: "2023/Spon01_Bongkotmart_Tiemmuang",
      },
      {
        name: "Naerunchara Prathumsuwan",
        position: "Sponsor Team Member",
        id: "Spon02",
        coreteam: true,
        img: "2023/Spon02_Naerunchara_Prathumsuwan",
      },
      {
        name: "Chayapon  Arpayatam",
        position: "Sponsor Team Member",
        id: "Spon03",
        coreteam: true,
        img: "2023/Spon03_Chayapon_Arpayatam",
      },
      {
        name: "Thanawan Ninlawan",
        position: "Sponsor Team Member",
        id: "Spon04",
        coreteam: true,
        img: "2023/Spon04_Thanawan_Ninlawan",
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
        img: "2023/Finance01_Tunyaluck_Liengkorsakul",
      },
      {
        name: "Thitaya Divari",
        position: "Finance Team Member",
        id: "Finance02",
        coreteam: true,
        img: "2023/Finance02_Thitaya_Divari",
      },
    ],
  },
  // Web Developer
  {
    name: "Web Developer",
    category: "Web Developer",
    members: [
      {
        name: "Panithi Makthiengtrong",
        position: "Web Developer",
        id: "Web01",
        coreteam: true,
        img: "2023/Web01_Panithi_Makthiengtrong",
      },
      {
        name: "Wichayada Chamnansil",
        position: "Web Designer",
        id: "Web02",
        coreteam: true,
        img: "2023/Web02_Wichayada_Chamnansil",
      },
      {
        name: "Chanotai Krajeam",
        position: "Web Developer",
        id: "Web03",
        coreteam: true,
        img: "2023/Web03_Chanotai_Krajeam",
      },
      {
        name: "Porrat Wannathip",
        position: "Web Developer",
        id: "Web04",
        coreteam: true,
        img: "2023/Web04_Porrat_Wannathip",
      },
    ],
  },

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
        img: "2023/Advisor01_Ronnapee_Chaichaowarat",
      },
      {
        name: "Asst. Prof. Manop Wongsaisuwan",
        position: "Electrical Advisor",
        id: "Advisor02",
        coreteam: false,
        img: "2023/Advisor02_Manop_Wongsaisuwan",
      },
    ],
  },
]

const teams: Teams[] = [
  {
    year: "2022",
    teams: team2022,
  },
  {
    year: "2023",
    teams: team2023,
  },
  
]

export default teams
