from bs4 import BeautifulSoup
import requests
URL = 'https://www.myprotein.co.in/blog/nutrition/bulking-how-to-bulk-tips-2/'
r = requests.get(URL) 

soup = BeautifulSoup(r.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
data_str = ""
for item in soup.find_all("p"):
    data_str = data_str + item.get_text()
       
print(data_str)
