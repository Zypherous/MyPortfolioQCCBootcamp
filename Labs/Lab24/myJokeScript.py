from browser import document, ajax
url = 'https://api.chucknorris.io/jokes/random'
def on_complete(req):
  import json
  data = json.loads(req.responseText)
  joke = data['value']
  document['joke'].text=joke
def get_joke(e):
  req=ajax.ajax()
  req.open('GET', url, True)
  req.bind('complete', on_complete)
  document['joke'].text = 'Wait for it...'
  req.send()
document['joke-btn'].bind('click', get_joke)