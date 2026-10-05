"""Render the downloadable CV from content/resume.json. Requires reportlab."""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'content/resume.json').read_text())
output = root / 'public/Marwan-Ashraf-uiux design-CV.pdf'
pdfmetrics.registerFont(TTFont('ResumeSerif', '/System/Library/Fonts/Supplemental/Times New Roman.ttf'))
pdfmetrics.registerFont(TTFont('ResumeSerifBold', '/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf'))
pdfmetrics.registerFontFamily('ResumeSerif', normal='ResumeSerif', bold='ResumeSerifBold')
style = ParagraphStyle('body', fontName='ResumeSerif', bulletFontName='ResumeSerif', fontSize=10.5, leading=12.7, spaceAfter=3)
heading = ParagraphStyle('heading', parent=style, fontName='ResumeSerifBold', fontSize=13, leading=15, spaceBefore=7, spaceAfter=3)
name = ParagraphStyle('name', parent=style, fontName='ResumeSerifBold', fontSize=18, leading=22, alignment=1, spaceAfter=5)
center = ParagraphStyle('center', parent=style, alignment=1, fontSize=10, leading=13)
small = ParagraphStyle('small', parent=style, fontSize=9.5, leading=12, textColor=colors.HexColor('#333333'))
items = []
def text(value):
    for char in ['\u2010','\u2011','\u2012','\u2013','\u2014']: value = value.replace(char, '-')
    return escape(value)
def p(value, st=style): return Paragraph(text(value), st)
def section(title):
    items.extend([p(title, heading), HRFlowable(width='100%', thickness=.6, color=colors.black), Spacer(1, 5)])
def entry(title, date=''):
    row = Table([[Paragraph('<b>'+text(title)+'</b>', style), p(date, small)]], colWidths=[346, 169])
    row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),2)]))
    items.append(row)
def bullets(values):
    for value in values: items.append(Paragraph(text(value), style, bulletText='\u2022'))
items.append(p(data['name']+' | '+data['headline'], name))
items.append(p(data['location']+' | '+data['phone']+' | '+data['email'], center))
items.append(Paragraph('<link href="'+data['linkedin']+'">LinkedIn: marwan-ashraf-ibrahim</link> | <link href="'+data['portfolio']+'">marwans-portfolio-wine.vercel.app</link>', center))
section('Summary');items.append(p(data['summary']))
section('Experience')
for e in data['experience']:
    entry(e['title'],e['date']);items.append(p(e['context'],small));bullets(e['bullets']);items.append(Spacer(1,3))
section('Selected Projects')
for e in data['projects']:
    entry(e['title']);items.append(p(e['context'],small));bullets(e['bullets']);items.append(Spacer(1,3))
section('Professional Training');e=data['training'];entry(e['title'],e['date']);items.append(p(e['detail']))
section('Education');e=data['education'];entry(e['title'],e['date']);items.append(p(e['detail']))
section('Skills');items.append(p(data['skills']))
items.append(Spacer(1,5));items.append(p(data['additional'],small))
SimpleDocTemplate(str(output),pagesize=A4,leftMargin=40,rightMargin=40,topMargin=32,bottomMargin=32,title=data['name']+' - Product & UI/UX Designer',author=data['name']).build(items)
print(output)
