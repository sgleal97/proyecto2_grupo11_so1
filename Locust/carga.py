import time
from locust import HttpUser, task
import json
import random

class QuickstartUser(HttpUser):
    casos = []
    with open('lista_casos.json') as json_file:
        data = json.load(json_file)
        casos.extend(data)

    @task
    def insercion_caso(self):
        time.sleep(1)
        self.client.post("/NewCase",json=random.choice(self.casos))