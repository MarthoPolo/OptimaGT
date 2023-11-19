import requests

API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "what is a good workout routine for bulking? ",
})

print(output)