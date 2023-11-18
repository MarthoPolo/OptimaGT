from bs4 import BeautifulSoup
import string
import requests

file_path = 'fitness_links.txt'

# Read fitness goals from the text file using readlines()
with open(file_path, 'r') as file:
    fitness_links = file.readlines()

# Iterate through the list and store each goal in its own string, removing newline characters
link_strings = [goal.strip() for goal in fitness_links]

    

    
      

def webScrape (URL, fileNUm):

    try:
        request = requests.get(URL) 

        soup = BeautifulSoup(request.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
        data_str = ''
        i = 0
        for item in soup.findAll('p'):
            data_str = data_str + item.get_text()
            if (i % 50 == 0):
                data_str += "\n"
            i += 1

        if (len(data_str) <= 1200):
            return


        # Specify the path to the output text file
        
        output_file_path = 'RawText/raw_text' + str(fileNum) + ".txt"

        # Write formatted fitness goals to the output text file
        with open(output_file_path, 'w') as output_file:
            output_file.write(data_str)
        print(data_str)

    except:
        return

fileNum = 0
for link in link_strings:
    URL = link
    webScrape(URL, fileNum)
    fileNum += 1
print('Done')


