
namelist = [
    "Pakorn Boonpetch",
"Thanachot Sappakit",
"Sakunthan Sunhem",
"Sorawit Thipsingh",
"Krittapat Onthuam",
"Pirat Pothavorn",
"Chayavich Asavakanoksilp",
"Jessadakorn Wongsawangsiri",
"Pollapat Jiamprasert",
"Pannavich Setawanna",
"Kongpop Panya",
"Khunanon Rattanagoses",
"Boonthicha Saejia",
"Oranich Jamkachornkiat",
"Punnathone Songjakkaew",
"Kasidit Srisuntisuk",
"Kittipob Verawatthana",
"Thitiwan Krachangnam",
"Kasidit Suwannagarn",
"Rada Chuengpichanwanich",
"Panick Pitchdumrong",
"Pattharaphol Chainiwattana",
"Korawish Thanasit",
"Wiphop Konghkudang",
"Thanida Prasertchai",
"Nutchanon Jariyanurut",
"Supawit Lertnaisat",
"Suppakorn Boonprasert",
"Sukit Sukittanon",
"Pannaton Kerdkaewfah",
"Supawich Sitdhipol",
"Napat Cheetanom",
"Thanakorn Sappakit",
"Pon-ek Tangmunchittham",
"Rattanapong Wongcharoensin",
"Unna Talomsin",
"Phurinut Choksettakig",
"Chayada Suttitossatham",
"Thanawich Wongniyomkaset",
"Peerakrit Phacharaboonyakiat",
"Asst. Prof. Nattee Niparnan, Ph.D.",
"Asst. Prof. Manop Wongsaisuwan",
"Ronnapee Chaichaowarat, Ph.D.",
"Karu Chongsiripinyo,Ph.D.",
"Asst. Prof. Witaya Wannasuphoprasit"
]


formatted_names = []

for name in namelist:
    formatted_name = {
        'name': name,
        'position': '',
        'id': '',
        'coreteam': True,
        'img': ''
    }
    formatted_names.append(formatted_name)

# Print the formatted names
for formatted_name in formatted_names:
    print(formatted_name)
