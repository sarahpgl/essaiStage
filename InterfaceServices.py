import subprocess
from flask import Flask, jsonify,render_template
from operator import contains
import re   
from bs4 import BeautifulSoup, NavigableString,Tag
import requests
import json

#récupération des services actifs via une requête sur la base InfluxDB où est stocké l'état des services
def getServices() :
    
    #test

    # Envoie d'un get request à l'API URL
    response = requests.get('http://172.16.148.2:8086/query?pretty=true&db=supervision&q=SELECT * FROM "services"WHERE (time <= now() OR time >= now()-120m) ORDER BY time DESC',headers = {"Authorization": "Token 21lky0BPD-W_WcgWY4fcxIiMNhfN-WOwYfMopCXF5B0SMzaRK7-EGGocn4nbPqMy2X4qm7DWJO-aigtVNou7_w=="})

    # Découpage du json récupéré via l'API
    data = response.json()
    service =[]
    data2= str(data).split("values")[1].split("[")
    iter = 0
    
    for i in data2 :
       
        if iter <=5 :
            
            
            s= i.split("]")
            
            if len(s)>1:
                s2= s[0].split("'") 
                
                #récupération de l'état
                s3 = s2[2].split(",")
                if s3[1] == ' 1' :
                    #ajout du service dont l'état est 1 
                    service.append(s2[5]) 
                    
            iter +=1               
    return service

#paramètres application Flask
app = Flask(__name__)

@app.route('/')
#modification d'un document html afin d'afficher les services actifs


def modif() :
    with app.app_context():

        l = str(getServices())
        
        v = ["Python","InfluxD","Telegraf","Grafana"]
        #ouverture d'un document html type
        html_doc =  open(r".\templates\template.html", "r")
        soup = BeautifulSoup(html_doc, 'html.parser')
        
        
        #on se place au niveau du div class="row row-cols-4"
        for p in soup.find_all("div",class_="row row-cols-4"):
                    
                    #pour chaque service, on affiche son nom
                    for  i in v :
                        if isinstance(p, NavigableString):
                            continue

                        n = BeautifulSoup('<div class="col"><div class="h4 pb-2 mb-4 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"> %s </div> </div>' % str(i),features="html.parser")
                        p.append(n) 
                    
                        
                    for i in v :
                        if isinstance(p, NavigableString):
                            continue
                        
                       #pour chaque service, on affiche son état
                        if i.lower() in l:
                            n = BeautifulSoup('<div class="col"> %s </div>' % "Actif",features="html.parser")
                            p.append(n) 
                        else:
                            n = BeautifulSoup('<div class ="col" > %s </div>' % "Inactif",features="html.parser")
                            p.append(n) 
                            #Affichage de l'alerte en cas d'inactivité
                            for u in soup.find_all("body"):
                                        n = BeautifulSoup('<div class="container" style="margin-top: 1%%;"><div class="alert alert-danger d-flex align-items-center" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg><div>%s </div></div></div>' % str(i+ " n'est pas actif sur le poste 172.16.148.2"), features="html.parser")
                                        u.append(n)     
                                        
        
        #création d'un autre fichier html pour héberger les modifiations
        new = open(r'.\templates\index.html', "w")
        
        new.write(str(soup))
        new.close()
        html_doc.close()

        return render_template('index.html')



#main
if __name__ == "__main__":
    
    modif()
    #application lancée sur le port 1702
    app.run(port = 1702, debug = True)

    
    
    
   

    
