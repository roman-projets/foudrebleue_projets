import qrcode
from datetime import datetime

maintenant = datetime.now()

url = "https://foudrebleue-projets.netlify.app/"

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4
)

qr.add_data(url)
qr.make(fit=True)

image = qr.make_image(
    fill_color="black",
    back_color="white"
)

image.save(
    "/storage/emulated/0/Documents/QR_Code_Roman_Gomes_Projets.png"
)

print(
    f"QR Code généré !!!\nLe {maintenant.strftime('%d/%m/%Y à %H:%M:%S')}"
)