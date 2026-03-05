## Usar a vesão 3.10
# python3.10 read-file.py

import json
## Essa lib consegue ler o timestamp com Z (zulu time) - Greenwitch
from dateutil import parser 

with open('file.json', 'r') as file:
    jsonData = json.load(file)

def parse_timestemp(timestamp):
    return parser.isoparse(timestamp)

for course in jsonData:
    print(f"Curso: {course['title']}")
    
    for lesson in course['lessons']:
        print(f"    Aula {lesson['id']}: {lesson['title']}")
        print(f"        Media: {lesson['media']}")
        print(f"        Timestamp: {parse_timestemp(lesson['timestamp'])}")
        