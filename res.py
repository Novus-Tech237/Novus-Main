from docx import Document
from bs4 import BeautifulSoup
import os

def convert_word_to_html(word_file_path):
    # Load the Word document
    doc = Document(word_file_path)

    # Save the document as HTML
    html_file_path = os.path.join(os.path.expanduser("~"), 'Desktop', 'converted.html')
    doc.save(html_file_path)

    # Read the HTML file and extract the HTML content
    with open(html_file_path, 'rb') as html_file:
        html_content = html_file.read().decode('cp1252', errors='replace')

    # Clean up the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    cleaned_html = soup.prettify()

    # Save the cleaned HTML content
    with open(html_file_path, 'w', encoding='utf-8') as output_file:
        output_file.write(cleaned_html)

    return html_file_path

# Example usage
word_file_path = 'C:\\Users\\DEFAULT.DESKTOP-8MET5OU\\Desktop\\CSC Works\\The ICT University\\Solux\\OOAID Solutions\\Solution Template\\Template_Three.docx'
converted_html_path = convert_word_to_html(word_file_path)
print('Word document converted to HTML:', converted_html_path)