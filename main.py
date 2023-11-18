from bs4 import BeautifulSoup
import string
import requests


#Web Scrape for Fitness Program
URL = 'https://thefitness.wiki/weight-loss-101/'
r = requests.get(URL) 
soup = BeautifulSoup(r.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
data_str = ''
for item in soup.findAll("div", class_="entry-content"):
    data_str = data_str + item.get_text()

print(data_str)


#sectionWeb = soup.findAll('div', class_ ='entry-content')
#print(sectionWeb)