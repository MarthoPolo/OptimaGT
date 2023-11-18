from bs4 import BeautifulSoup
import string
import requests

file_path = 'fitness_links.txt'

# Read fitness goals from the text file using readlines()
with open(file_path, 'r') as file:
    fitness_links = file.readlines()

# Iterate through the list and store each goal in its own string, removing newline characters
link_strings = [goal.strip() for goal in fitness_links]

for link in link_strings:
    URL = link
    r = requests.get(URL) 

    soup = BeautifulSoup(r.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
    data_str = ""
    for item in soup.find_all("p"):
        data_str = data_str + item.get_text()

    # Specify the path to the output text file
    output_file_path = 'raw_text.txt'

    # Write formatted fitness goals to the output text file
    with open(output_file_path, 'w') as output_file:
        output_file.write(data_str)

    
      

def webScrape (URL):
    request = requests.get(URL) 
    soup = BeautifulSoup(request.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
    data_str = ''
    for item in soup.findAll('p'):
        data_str = data_str + item.get_text()

    print(data_str)

    

