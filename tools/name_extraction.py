from bs4 import BeautifulSoup

# HTML input string (replace with your own HTML)
with open("tools/About _ Eic Robocup2022.html","r") as f:
    html = f.read()

# Create BeautifulSoup object
soup = BeautifulSoup(html, 'html.parser')

# Find all <span> tags
span_tags = soup.find_all('span')

# Extract the text from each <span> tag
text_list = [span.get_text() for span in span_tags]

# Print the extracted text
for text in text_list:
    if ("Team" not in text) and ("Adviser" not in text) and  ("Leader" not in text):
        print(text)


# After running the code
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
print(len(namelist))