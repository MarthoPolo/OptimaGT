from bs4 import BeautifulSoup
import requests

def webScrape (URL):
    request = requests.get(URL) 
    soup = BeautifulSoup(request.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
    data_str = ''
    for item in soup.findAll('p'):
        data_str = data_str + item.get_text()

    print(data_str)

webScrape("https://purefitness.com/blogs/a-beginners-guide-to-bulking-and-cutting/")
