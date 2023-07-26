from pymodbus.constants import Endian
from pymodbus.payload import BinaryPayloadDecoder
from pymodbus.client import ModbusTcpClient
import json
import math
import time
import datetime
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
import threading

import subprocess


import re   
import cgi
import json

#informations de connexions pour influxdb
token = "21lky0BPD-W_WcgWY4fcxIiMNhfN-WOwYfMopCXF5B0SMzaRK7-EGGocn4nbPqMy2X4qm7DWJO-aigtVNou7_w=="
bucket = "supervision"
org = "DataRecovery"

#fonctions pour intéragir avec InfluxDB
class InfluxClient:
    def __init__(self,token,org,bucket): 
        self._org=org 
        self._bucket = bucket
        self._client = InfluxDBClient(url="http://172.16.148.2:8086", token=token)

    def write_data(self,data,write_option=SYNCHRONOUS):
        write_api = self._client.write_api(write_option)
        write_api.write(self._bucket, self._org , data,write_precision='ms', protocol="json")

    def write_api_close(self):
        write_api = self._client.write_api()
        write_api.close()


#définition du format de json
def InsertInflux(IC,  mesure,id,state):
   


  
    value = [
        {
            "measurement": "services",
            "tags": {
                
                "id": id,
                "service" : mesure
            },
            "time": datetime.datetime.utcfromtimestamp(time.time()).isoformat(),
            "fields": {
                "id": id,
                "etat" : int(state)
              
                
            }
        }
    ]


    IC.write_data(value)
    
#fonction pour récupérer les services actifs spécifiques
def get_processes_running():
    #commande récupérant tous les services actifs
    tasks = subprocess.check_output(['tasklist']).split(b"\r\n")

    #liste des services (à modifier en fonction des services à surveiller)
    services =[b'telegraf', b'influx', b'grafana', b'python']

    #extraction des services à partir de tasks
    jsonex = []
    for task in tasks:
        m = re.match(b"(.+?) +(\d+) (.+?) +(\d+) +(\d+.* K).*",task)
        if m is not None:
            for i in services :
                
                if i in m.group(1)  :
                      
                      result =str(m.group(1)).split("'")
                      result = result[1].split(".exe")
                      
                      jsonex.append(result[0])
                     
    #commande récupérant les services tournant sur docker
    dockertask= subprocess.check_output(['docker','ps']).split(b"\n")
    
    result2 =[]
        #extraction des services à partir de dockertask
    for task in dockertask :
        
        
            if b'CONTAINER ID   IMAGE           COMMAND     CREATED       STATUS      PORTS                    NAMES' in task :
                continue
            else :
                
                task =task.split(b"-image")
            
                task = task[0].split(b" ")
                
                result2=(task[len(task)-1])
                for i in services :
                    if i in result2 :
                        jsonex.append(result2)

            
    return jsonex



#main
if __name__ == "__main__":
    
    id =0

    services =["telegraf", "influxd", "grafana", "python"]
    result = get_processes_running()
    IC = InfluxClient(token,org,bucket)

    #envoie des services collectés vers la base de donnée
    for i in services :
        
        if (i in str(result)) :
            
            InsertInflux(IC,i,id, "1")
        else :
            InsertInflux(IC,i,id, "0")
        

        id+=1
    

    
#S.ei7c.BDD



    
   