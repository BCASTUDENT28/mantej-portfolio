import os
from PIL import Image, ImageDraw, ImageFont

# Create a 1200x630 Open Graph Image
w, h = 1200, 630
bg_color = (27, 36, 56) # --bg-base navy #1B2438
img = Image.new('RGB', (w, h), color=bg_color)
draw = ImageDraw.Draw(img)

# Load existing hero or denim image if available
hero_path = 'images/lpu_robo_park.jpg'
if not os.path.exists(hero_path):
    hero_path = 'images/lpu_auditorium.jpg'

if os.path.exists(hero_path):
    try:
        with Image.open(hero_path) as hero:
            hero = hero.convert('RGB')
            # Crop/resize hero to right side of OG card (600x630)
            hero = hero.resize((600, 630), Image.Resampling.LANCZOS)
            img.paste(hero, (600, 0))
    except Exception as e:
        print(f"Error loading hero image: {e}")

# Draw subtle gradient overlay / border on left side
draw.rectangle([0, 0, 650, 630], fill=(27, 36, 56))

# Accent bar (Blue #7EB0F0)
draw.rectangle([60, 80, 75, 550], fill=(126, 176, 240))

# Try loading default font or draw crisp text
try:
    font_title = ImageFont.truetype("arial.ttf", 54)
    font_sub = ImageFont.truetype("arial.ttf", 28)
    font_tag = ImageFont.truetype("arial.ttf", 22)
except Exception:
    font_title = font_sub = font_tag = ImageFont.load_default()

draw.text((100, 120), "MANTEJ SINGH", fill=(231, 236, 245), font=font_title)
draw.text((100, 200), "Founder & Full-Stack Engineer", fill=(126, 176, 240), font=font_sub)
draw.text((100, 260), "Lovely Professional University · Punjab, India", fill=(156, 168, 192), font=font_tag)

draw.text((100, 380), "🚀 Founder @ HustleSmith Studio & Applify", fill=(231, 236, 245), font=font_tag)
draw.text((100, 420), "📱 Turning Website URLs into Native Mobile Apps", fill=(231, 236, 245), font=font_tag)

# Website URL badge
draw.rectangle([100, 490, 420, 540], fill=(35, 43, 61), outline=(126, 176, 240), width=2)
draw.text((120, 502), "https://mantej.vercel.app", fill=(126, 176, 240), font=font_tag)

og_path = 'images/og_image.jpg'
img.save(og_path, 'JPEG', quality=95)
print(f"Created Open Graph image {og_path} ({os.path.getsize(og_path)/1024:.1f} KB, 1200x630 px)")
